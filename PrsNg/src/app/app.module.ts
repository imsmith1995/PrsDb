import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AppInitService } from './app-init.service';
import { BoolDisplayPipe } from './common/bool-display.pipe';

export function startupServiceFactory(appInit: AppInitService) : Function {
  return () => appInit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    HeadComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserChangeComponent,
    FootComponent,
    UserLoginComponent,
    BoolDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
        deps: [AppInitService],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
