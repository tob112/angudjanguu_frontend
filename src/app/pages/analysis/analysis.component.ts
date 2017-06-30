import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Vector } from './vector.interface';

@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this.formBuilder.array([
        this.initAddress(),
      ])
    });
  }

  save(model: Vector) {
    // call API to save customer
    // console.log(model);
  }


  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  initAddress() {
    return this.formBuilder.group({
      street: ['', Validators.required],
      postcode: [''],
    });
  }
}

