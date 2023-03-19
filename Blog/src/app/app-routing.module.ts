import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts/new' },
  { path: 'posts/new', component: FormularioComponent },
  { path: 'posts', component: ListaPostsComponent },
  { path: '**', redirectTo: '/posts/new' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
