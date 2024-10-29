import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-movie-list',
  standalone: true, 
  imports: [FormsModule, CommonModule, SearchBarComponent], 
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'] 
})



export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  displayMessage: string = '';
  selectedMovieId: number | null = null;

  constructor(private movieService: MovieService, private router: Router) {} 

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(): void {
    this.movieService.getMovieList().subscribe({
      next: (data) => {
        this.movies = data;
        this.filteredMovies = data;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      },
    });
  }

  searchMovieByTitle(title: string): void {
    if (title.trim()) {
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );

      if (this.filteredMovies.length === 0) {
        this.displayMessage = 'No movies found matching your search.';
      } else {
        this.displayMessage = '';
      }
    } else {
      this.filteredMovies = this.movies;
      this.displayMessage = '';
    }
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}