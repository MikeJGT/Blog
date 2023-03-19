import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [

    ]
  }

  create(post: Post) {
    this.arrPosts = this.getAll()
    this.arrPosts.push(post);
    this.setLocalStorage();
  }

  getAll() {
    this.arrPosts = this.getLocalStorage()
    return this.arrPosts;
  }

  getAllCategories() {
    let categorias: string[] = [];
    this.arrPosts = this.getLocalStorage();
    this.arrPosts.filter(categoria => categorias.push(categoria.categoria))
    return categorias;
  }

  getByCategory(category: string) {
    this.arrPosts = this.getAll()
    return this.arrPosts.filter(post => post.categoria.includes(category))
  }

  setLocalStorage() {
    localStorage.setItem('Posts', JSON.stringify(this.arrPosts))
  }
  getLocalStorage() {
    if (localStorage.getItem('Posts')) {
      let datos = JSON.parse(localStorage.getItem('Posts')!);
      console.log('Get Datos ->', datos)
      return datos;
    }
    return []
  }
}

// {
//   titulo: 'El Gato',
//   texto: 'Erase una vez un gato bonito  lsssssss  ssss sssssssssss  ssss sssss ssss ssssssss ssssssss ssssssss ssssssss sssssssssssssssss asnasdlaksdkamsdmlaskmdamsdma kasldmasmd lamsdm alsmdl maslkmlkam dlkamdlamsdlmalkmlk amslkamdlk maslkdm lkmdlk kmasm l',
//   autor: 'El gato con botas',
//   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6uHWJquRf_AwM8-mnbv2UeOtsd2BFFiXEg&usqp=CAU',
//   fecha: new Date("2023-03-25"),
//   categoria: 'Gatos'
// },
// {
//   titulo: 'El Gato',
//   texto: 'Erase una vez un gato bonito  lsssssss  ssss sssssssssss  ssss sssss ssss ssssssss ssssssss ssssssss ssssssss sssssssssssssssss asnasdlaksdkamsdmlaskmdamsdma kasldmasmd lamsdm alsmdl maslkmlkam dlkamdlamsdlmalkmlk amslkamdlk maslkdm lkmdlk kmasm l',
//   autor: 'El gato con botas',
//   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6uHWJquRf_AwM8-mnbv2UeOtsd2BFFiXEg&usqp=CAU',
//   fecha: new Date("2023-03-25"),
//   categoria: 'Gatos'
// },
// {
//   titulo: 'El Gato',
//   texto: 'Erase una vez un gato bonito  lsssssss  ssss sssssssssss  ssss sssss ssss ssssssss ssssssss ssssssss ssssssss sssssssssssssssss asnasdlaksdkamsdmlaskmdamsdma kasldmasmd lamsdm alsmdl maslkmlkam dlkamdlamsdlmalkmlk amslkamdlk maslkdm lkmdlk kmasm l',
//   autor: 'El gato con botas',
//   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6uHWJquRf_AwM8-mnbv2UeOtsd2BFFiXEg&usqp=CAU',
//   fecha: new Date("2023-03-25"),
//   categoria: 'Gatos'
// },
// {
//   titulo: 'El Gato',
//   texto: 'Erase una vez un gato bonito  lsssssss  ssss sssssssssss  ssss sssss ssss ssssssss ssssssss ssssssss ssssssss sssssssssssssssss asnasdlaksdkamsdmlaskmdamsdma kasldmasmd lamsdm alsmdl maslkmlkam dlkamdlamsdlmalkmlk amslkamdlk maslkdm lkmdlk kmasm l',
//   autor: 'El gato con botas',
//   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6uHWJquRf_AwM8-mnbv2UeOtsd2BFFiXEg&usqp=CAU',
//   fecha: new Date("2023-03-25"),
//   categoria: 'Gatos'
// }