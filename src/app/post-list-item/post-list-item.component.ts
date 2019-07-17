import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: PostModel;
  @Input() indexOfPost: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onClickLove(index: number) {
    this.postService.loveIt(index);
  }

  onClickDontLove(index: number) {
    this.postService.dontLoveIt(index);
  }

  onClickDelete() {
    this.postService.removePost(this.post);
  }

}
