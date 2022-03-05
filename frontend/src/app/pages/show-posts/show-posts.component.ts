import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/service/auth.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css'],
})
export class ShowPostsComponent implements OnInit {
  posts: Post[] = [];
  isLoaded = false;
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (!this._auth.isLogin) {
      this._router.navigateByUrl('/login');
    }
    this.showPosts();
  }
  showPosts() {
    this._auth.showPosts().subscribe((res) => {
      this.posts = res.data;
      this.isLoaded = true;
    });
  }
}
