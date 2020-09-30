import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collection: any = [];

  ngOnInit(): void {
    this.resto.getTeamMember().subscribe((data) => {
      console.warn(data)
      this.collection = data
    });
  }

}
