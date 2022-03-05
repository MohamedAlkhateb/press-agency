import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditiorComponent } from './pages/editor/editior.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ShowPostsComponent } from './pages/show-posts/show-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'editor', component: EditiorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addPost', component: AddPostComponent },
  { path: 'showPosts', component: ShowPostsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
