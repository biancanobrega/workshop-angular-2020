import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComicFormComponent } from './comic-form/comic-form.component';
import { ComicComponent } from './comic/comic.component';
import { ComicsComponent } from './comics.component';
import { ComicService } from './shared/comic.service';

const routes: Routes = [{ path: '', component: ComicsComponent }];


@NgModule({
  declarations: [ComicsComponent, ComicComponent, ComicFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  providers: [ComicService]
})
export class ComicsModule { }
