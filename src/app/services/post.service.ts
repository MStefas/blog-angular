import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {PostModel} from '../post.model';


@Injectable()
export class PostService {
  posts: PostModel[];
  postSubject = new Subject<PostModel[]>();

  constructor() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit ' +
      'amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod' +
      ' non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis ' +
      'semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero ' +
      'pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed' +
      ' dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam' +
      ' nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.';

    // initialize list of posts
    this.posts  = [
      new PostModel('Mon premier post', content),
      new PostModel('Mon second post', content),
      new PostModel('Encore un post', content)
    ];

    // initialize loveIts values
    this.posts[0].loveIts++;
    this.posts[1].loveIts--;
    // this.loveIt(0);
    // this.dontLoveIt(1);
  }

  addPost(title: string, content: string) {
    const newPost = {
      title: '',
      content: '',
      loveIts: 0,
      createdAt: new Date(),
    };

    newPost.title = title;
    newPost.content = content;

    this.posts.push(newPost);
    this.emitPostSubject();
  }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  removePost(post: PostModel) {
    const indexOfPost = this.posts.findIndex(
      (postElem) => {
        return post === postElem;
      });

    this.posts.splice(indexOfPost, 1);
    this.emitPostSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }

}
