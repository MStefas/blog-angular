import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postsListItems: PostModel[];
  constructor() { }

  ngOnInit() {
  }

}
