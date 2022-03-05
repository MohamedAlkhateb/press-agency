import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EditiorComponent } from './pages/editor/editior.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ShowPostsComponent } from './pages/show-posts/show-posts.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EditiorComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    LogoutComponent,
    AddPostComponent,
    ShowPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
