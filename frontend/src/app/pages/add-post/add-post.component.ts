import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/service/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  msg = '';
  isSubmitted = false;

  addPostForm: FormGroup;
  constructor(
    private _auth: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (!this._auth.isLogin) {
      this._router.navigateByUrl('/login');
    }
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      articleType: ['', [Validators.required]],
    });
  }
  get f() {
    return this.addPostForm.controls;
  }

  addPost() {
    this.isSubmitted = true;
    if (this.addPostForm.valid) {
      this._auth.addPost(this.addPostForm.value).subscribe((data) => {
        if (data.apiStatus == true) this._router.navigateByUrl('/editor');
        else {
          this.msg = data.message;
        }
      });
    }
  }
}
