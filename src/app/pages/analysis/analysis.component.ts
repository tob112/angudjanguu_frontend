import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Analysis, Vector } from './analysis.interface';

import { Car } from './vector.interface'


@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {


  editing = {};


  constructor() {
  }

  rows = [
    { index: '1', gender: 'Male', age: 'Swimlane' },
    { index: '2', gender: 'Male', age: 'KFC' },
    { index: '3', gender: 'Female', age: 'Burger King' },
  ];
  columns = [
    { prop: 'index' },
    { name: 'gender' },
    { name: 'age' },
  ];


  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }


  // fillCars(): void {
  //
  //   this.cars = [
  //     {vin: 1, year: 'A', brand: 1, color: 'lol'},
  //   ];
  //
  // }

  ngOnInit() {
    // this.myForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.maxLength(20)]],
    //   frequency: ['', Validators.required],
    //   vectors: this.formBuilder.array([this.initVectors()]),
    // });

  }

  saveAnalysis() {
    // call API to save customer

  }

  //
  // removeVector(index: number) {
  //   const control = <FormArray>this.myForm.controls['vectors'];
  //   control.removeAt(index);
  // }
  //
  //
  // addVector() {
  //   const control = <FormArray>this.myForm.controls['vectors'];
  //   control.push(this.initVectors());
  // }
  //
  //
  // initVectors() {
  //   return this.formBuilder.group({
  //     name: ['', Validators.required],
  //     land: [''],
  //   });
  // }
}

