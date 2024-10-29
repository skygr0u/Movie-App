import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'assets/movies.json'; 


  constructor(private http: HttpClient) {}
  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
  getMovieById(id: number): Observable<Movie | undefined> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }
  getMovieByTitle(title: string): Observable<Movie | undefined> {
    return this.getMovieList().pipe(
      map(movies => movies.find(movie => movie.title.toLowerCase() === title.toLowerCase()))
    );
  }
}
