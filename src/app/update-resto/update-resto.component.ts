import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private routeParams:ActivatedRoute, private resto: RestoService) { }

  alert: boolean = false;

  ngOnInit(): void {
    console.warn(this.routeParams.snapshot.params.id)
    //learn for each.. and handling data..
    this.resto.getCurrentResto(this.routeParams.snapshot.params.id).subscribe((result)=>{
      console.warn(result)
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        type: new FormControl(result['type']),
        address: new FormControl(result['address'])
      })
    })

  }
  collection(){
    console.warn("item",this.editResto.value)
    this.resto.updateResto(this.routeParams.snapshot.params.id, this.editResto.value).subscribe((result)=>{
      console.warn("result", result)
      this.alert = true
    }) 
  }
  closeAlert(){
    this.alert=false
  }

}
