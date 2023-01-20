import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}
 
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
 
  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=fdec464518e37820d050b8bbfe43370c`
    );
  }
 
  getMovieDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fdec464518e37820d050b8bbfe43370c`
    );
    
  }
}