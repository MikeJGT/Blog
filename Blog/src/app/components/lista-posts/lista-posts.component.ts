import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  listaPosts: Post[]
  constructor(private postSv: PostsService) {
    this.listaPosts = []
  }
  ngOnInit() {
    this.listaPosts = this.postSv.getAll();
  }
}
