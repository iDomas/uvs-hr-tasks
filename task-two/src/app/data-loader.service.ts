import { City } from './model/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from './model/config';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  private _jsonCitiesURL = 'assets/cities.json';
  private _jsonConfigURL = 'assets/config.json';
  private _cities: Observable<City[]>;
  private _config: Config;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Config>(this._jsonConfigURL).subscribe((config: Config) => {
      this._config = config;
    })
    this._cities = this.httpClient.get<City[]>(this._jsonCitiesURL);
  }

  public getCities(): Observable<City[]> {
    return this._cities;
  }

  public getConfig(): Config {
    return this._config;
  }
}
