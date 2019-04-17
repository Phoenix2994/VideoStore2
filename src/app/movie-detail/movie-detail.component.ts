import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnInit() {
    this.chooseMovie();
  }

  chooseMovie(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.movieService.getMovie(title)
      .subscribe(movie => this.movie = movie);
  }

}
