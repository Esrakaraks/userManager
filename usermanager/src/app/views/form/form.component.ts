import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }
  ngOnInit() {
  }
 
userForm=new FormGroup({
  name:new FormControl('esra'),
  job:new FormControl('')
})

onSubmit(){
    console.log(this.userForm.value);
    console.log(this.userForm.value.name)
}
  
}
