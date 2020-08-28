import { Component, OnInit, Input } from '@angular/core';
import { IComic } from './shared/comic.model';
import { ComicService } from './shared/comic.service';
import { Observable, combineLatest } from 'rxjs';
import {
  faSearch,
  IconDefinition,
  faEdit,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics$: Observable<IComic[]>;
  filteredComics$: Observable<IComic[]>;

  filterControl: FormControl;
  selectedComic: IComic;
  editComic: IComic;

  searchIcon: IconDefinition;
  editIcon: IconDefinition;
  removeIcon: IconDefinition;

  constructor(private readonly comicService: ComicService) {}

  ngOnInit(): void {
    this.searchIcon = faSearch;
    this.editIcon = faEdit;
    this.removeIcon = faTimes;

    this.getComics();
  }

  onChangeComic() {
    this.getComics();
    this.selectedComic = undefined;
    this.editComic = undefined;
  }

  getComics() {
    this.comics$ = this.comicService.getCommics();
    this.filterControl = new FormControl();
    const filter$ = this.filterControl.valueChanges.pipe(startWith(''), debounceTime(300));
    this.filteredComics$ = combineLatest(this.comics$, filter$).pipe(
      map(([comics, filterString]) =>
        comics.filter((comic) =>
          comic.name.toLowerCase().includes(String(filterString).toLowerCase())
        )
      )
    );
  }

  onRemove(comicId: number) {
    this.comicService.removeComic(comicId).subscribe(() => this.getComics());
  }
}
