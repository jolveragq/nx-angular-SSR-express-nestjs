import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RootComponent } from './pages/child/root.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), RootComponent],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
