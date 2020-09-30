import { browser } from 'protractor';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
 
  alert: boolean = false;

  addResto = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    address: new FormControl('')
    // on click operation: validation, 
  //take data and console it; consolidate data

  })
  //learn ngOnChange
  ngOnInit(): void {
  }

  // on submit, go to update component with data without api..
  // @input @Output
  collectResto() {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert = true
    })
    this.addResto.reset()
  }
  closeAlert(){
    this.alert=false
  }

}

