import { Component, OnInit } from '@angular/core';
import { IComic } from './shared/comic.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: IComic[];
  filteredComics: IComic[];
  searchValue: string;
  selectedComic: IComic;

  constructor() {}

  ngOnInit(): void {
    this.searchValue = '';
    this.comics = [
      {
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bc6a8f842b7c.jpg',
        name: 'Spider-Girl (1998) #70',
        releaseDate: new Date('2004-02-04'),
        description:
          'As the Buzz takes on the Man-Wolf and Spider-Girl finds herself pitted against Dr. Jade and the new Dr. Octopus, she gets an assist from the most unexpected source! Featuring cameos by Darkdevil, the Green Goblin & Ladyhawk.',
      },
      {
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/5e28a2fad25cf.jpg',
        name: 'Emma Frost (2003) #4',
        releaseDate: new Date('2003-12-01'),
        description:
          'Vacationing with her family in Peru, young Emma Frost discovers her newfound mutant powers aren\'t the only secret that her family is keeping! The perils and thrills of being a mutant set in as Emma slowly blossoms into the dangerous and seductive X-Man of today!',
      },
      {
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5d24f31b5565c.jpg',
        name: 'Spider-Man/Doctor Octopus: Negative Exposure (2003) #2',
        releaseDate: new Date('2003-11-05'),
        description:
          ' As Doctor Octopus sets his brutal plans for Spider-Man\'s downfall into motion, the web-slinger is forced to face off with another member of his deadly rogue\'s gallery - the cold-blooded Vulture!',
      },
    ];

    this.filteredComics = [...this.comics];
  }

  onFilter() {
    this.filteredComics = this.comics.filter((comic) =>
      comic.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
