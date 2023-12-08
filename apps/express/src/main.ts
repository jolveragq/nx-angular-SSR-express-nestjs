import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const defaultPort = 3333;
const port = process.env.PORT || defaultPort;
app.use('/assets', express.static(path.join(import.meta.url, 'assets')));
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express!' });
});
const serverDistFolder = path.dirname(fileURLToPath(import.meta.url));
const browserDistFolder = path.resolve(
  serverDistFolder,
  '../../frontend/browser'
);
app.set('view engine', 'html');
app.set('views', browserDistFolder);
app.get(
  '*.*',
  express.static(browserDistFolder, {
    maxAge: '1y',
  })
);
app.get('*', (req, res) => {
  const serverPath = path.resolve('dist/apps/frontend/server/server.mjs');
  import(serverPath).then(({ createAngularSSR }) => {
    console.info('SERVER SIDE RENDER!!');
    createAngularSSR(false, 'localhost', port, '').then((r) => {
      res.send(r.html);
    });
  });
});

const server = app.listen(port, () => {
  console.info(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
