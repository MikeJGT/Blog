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
  categorias: string[]
  constructor(private postSv: PostsService) {
    this.listaPosts = [],
      this.categorias = []
  }
  ngOnInit() {
    this.listaPosts = this.postSv.getAll();
    this.categorias = this.postSv.getAllCategories()
    //console.log('lista', this.listaPosts)
  }

  byCategory(category: any) {
    this.listaPosts = this.postSv.getByCategory(category.target.value)
    // console.log('Evento Categoria', category.target.value)
  }
}
