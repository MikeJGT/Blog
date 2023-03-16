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
    this.arrPosts.push(post);
  }
  getAll() {
    return this.arrPosts;
  }

  getByCategory(category: string) {
    return this.arrPosts.filter(post => post.categoria.includes(category))
  }

}
