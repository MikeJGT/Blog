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
  //prueba: Post
  constructor(private postSv: PostsService) {
    this.listaPosts = [],
      this.categorias = []
    // this.prueba = {
    //   titulo: 'El Gato',
    //   texto: 'Erase una vez un gato bonito  lsssssss  ssss sssssssssss  ssss sssss ssss ssssssss ssssssss ssssssss ssssssss sssssssssssssssss asnasdlaksdkamsdmlaskmdamsdma kasldmasmd lamsdm alsmdl maslkmlkam dlkamdlamsdlmalkmlk amslkamdlk maslkdm lkmdlk kmasm l',
    //   autor: 'El gato con botas',
    //   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6uHWJquRf_AwM8-mnbv2UeOtsd2BFFiXEg&usqp=CAU',
    //   fecha: new Date("2023-03-25"),
    //   categoria: 'Gatos'
    // }
  }
  ngOnInit() {
    this.listaPosts = this.postSv.getAll();
    this.categorias = this.postSv.getAllCategories()
    console.log('lista', this.listaPosts)
  }

  byCategory(category: any) {
    this.listaPosts = this.postSv.getByCategory(category.target.value)
    console.log('Evento Categoria', category.target.value)
  }
}
