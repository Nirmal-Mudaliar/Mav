import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TVDto } from 'src/app/models/tv';
import { CONSTANTS } from 'src/app/constants/urls';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private http: HttpClient) {}

  getTvSeries(type: string = 'popular') {
    return this.http
      .get<TVDto>(`${CONSTANTS.baseUrl}/tv/${type}?api_key=${CONSTANTS.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
