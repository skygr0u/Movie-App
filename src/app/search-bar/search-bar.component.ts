import { Component,EventEmitter,Output } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'] 
})
export class SearchBarComponent {
  searchTitle: string = ''; 
  @Output() search = new EventEmitter<string>(); 

  constructor(private movieService: MovieService) {}

  onKeyPress(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value; 
    this.searchMovieByTitle(input); 
  }

  onBackspace(): void {
    this.searchTitle = this.searchTitle.slice(0, -1); 
    this.searchMovieByTitle(this.searchTitle); 
  }

  searchMovieByTitle(title: string): void {
    this.search.emit(title);
  }
}