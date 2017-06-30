import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Analysis, Vector } from './analysis.interface';

@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {

  protected myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      frequency: ['', Validators.required],
      vectors: this.formBuilder.array([this.initVectors()]),
    });
  }

  saveAnalysis() {
    // call API to save customer

  }


  addVector() {
    const control = <FormArray>this.myForm.controls['vectors'];
    control.push(this.initVectors());
  }


  initVectors() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      land: [''],
    });
  }
}

