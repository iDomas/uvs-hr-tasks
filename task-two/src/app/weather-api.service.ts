import { Forecast } from './model/forecast';
import { Observable } from 'rxjs';
import { DataLoaderService } from './data-loader.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private CACHE_SIZE = 1;

  constructor(private httpClient: HttpClient, private dataLoader: DataLoaderService) { }

  fetchWeather(longitude: number, lattitude: number): Observable<Forecast> {
    const config = this.dataLoader.getConfig();
    const url = `https://${config.apiHost}/${longitude},${lattitude}?rapidapi-key=${config.apiKey}`;
    const params = new HttpParams();
    params.set('units', 'auto')
    params.set('lang', 'en')
    const headers = new HttpHeaders();
    headers.set('X-RapidAPI-Host', config.apiHost);
    return this.httpClient.get<Forecast>(url, { params: params, headers: headers}).pipe(shareReplay(this.CACHE_SIZE))
  }
}

//Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info.
