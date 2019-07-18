import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {PostModel} from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    );
  }

  onSavePost() {
    // create post
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new PostModel(title, content);

    // send post to service to create it
    this.postService.addPost(newPost);

    // go to /posts page
    this.router.navigate(['/posts']);
  }
}
