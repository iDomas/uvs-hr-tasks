import { DataLoaderService } from './../data-loader.service';
import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cities: City[] = [];

  constructor(private dataLaoder: DataLoaderService) { }

  ngOnInit(): void {
    this.dataLaoder.getCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

}
