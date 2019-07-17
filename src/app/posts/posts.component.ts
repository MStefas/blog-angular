import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy{

  posts: PostModel[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: PostModel[]) => {
        this.posts = posts;
      });

    this.postService.emitPostSubject();
    this.posts = this.postService.posts;
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
