import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [ {
    post: '',
    share: '',
    likes:'',
    comment: ''
  }
]
  constructor() { }

  ngOnInit() {
  }
  postMessage(post, share, like, comment){

// post = {textarea: }
 let newPost; 

  this.posts.push(newPost);
}
}
