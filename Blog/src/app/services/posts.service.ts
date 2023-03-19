import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = []
  }

  create(post: Post) {
    this.getAll()
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
    const noRepes = new Set(categorias);
    return [...noRepes];
  }

  getByCategory(category: string) {
    this.getAll()
    return this.arrPosts.filter(post => post.categoria.includes(category))
  }

  setLocalStorage() {
    localStorage.setItem('Posts', JSON.stringify(this.arrPosts))
  }
  getLocalStorage() {
    if (localStorage.getItem('Posts')) {
      let datos = JSON.parse(localStorage.getItem('Posts')!);
      //console.log('Get Datos ->', datos)
      return datos;
    }
    return []
  }
}
