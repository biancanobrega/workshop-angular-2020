import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComicService } from '../shared/comic.service';
import { IComic } from '../shared/comic.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.scss'],
})
export class ComicFormComponent implements OnInit, OnChanges {
  comicForm: FormGroup;

  #comic: IComic;

  get comic(): IComic {
    return this.#comic;
  }

  @Input()
  set comic(comic: IComic) {
    this.#comic = comic;
  }

  @Output()
  changeComic = new EventEmitter();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly comicService: ComicService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentComic: SimpleChange = changes.comic;
    if (currentComic && currentComic.currentValue) {
      this.initForm(currentComic.currentValue);
    }
  }

  initForm(comic?: IComic) {
    this.comicForm = this.formBuilder.group({
      image: [comic?.image || '', Validators.required],
      name: [comic?.name || '', Validators.required],
      releaseDate: [comic?.releaseDate.toString().slice(0, 10) || '', Validators.required],
      description: [comic?.description || '', Validators.required],
    });
  }

  onSubmit() {
    if (this.comicForm.valid) {
      const comic: IComic = {
        description: this.comicForm.get('description').value,
        image: this.comicForm.get('image').value,
        name: this.comicForm.get('name').value,
        releaseDate: new Date(this.comicForm.get('releaseDate').value),
      };
      let service: Observable<object>;
      if (this.comic?.id) {
        service = this.comicService.updateComic({...comic, id: this.comic.id});
      } else {
        service = this.comicService.addComic(comic);
      }
      service.subscribe(() => {
        this.initForm();
        this.changeComic.emit();
      });
    }
  }
}
