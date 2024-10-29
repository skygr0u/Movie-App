import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movieDetails: Movie | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      if (!id) {
        this.router.navigate(['/']);
      } else {
        this.getMovieDetails(id);
      }
    });
  }
  getMovieDetails(id: number): void {
    this.movieService.getMovieById(id).subscribe(
      details => {
        this.movieDetails = details;
        console.log('Movie Details:', this.movieDetails);
      },
      error => {
        console.error('Error fetching movie details:', error);
      }
    );
  }
  
 
  
}