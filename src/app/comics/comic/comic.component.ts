import { Component, OnInit, Input } from '@angular/core';
import { IComic } from '../shared/comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  @Input()
  comic: IComic;

  constructor() { }

  ngOnInit(): void {
  }

}
