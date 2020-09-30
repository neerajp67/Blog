import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collection: any = [];

  ngOnInit(): void {
    this.resto.getBlog().subscribe((data) => {
      console.warn(data)
      this.collection = data
    });
  }
}