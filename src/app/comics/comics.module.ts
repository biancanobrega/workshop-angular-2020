import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comic/comic.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ComicsComponent }];


@NgModule({
  declarations: [ComicsComponent, ComicComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComicsModule { }
