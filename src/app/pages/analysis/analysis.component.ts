import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


import { Vector } from './vector.interface'


@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {


  public editing = {};
  public rows: Vector[];


  constructor() {
  }

  // rows = [
  //   {name: 'klaus', gender: 'Male', age: 'Swimlane'},
  //   {name: 'kleber', gender: 'Male', age: 'KFC'},
  //   {name: 'lul', gender: 'Female', age: 'Burger King'},
  // ];
  columns = [
    {prop: 'name'},
    {name: 'gender'},
    {name: 'age'},
  ];


  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }


  ngOnInit() {

    this.rows = [
      {name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3}

    ]


    // this.myForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.maxLength(20)]],
    //   frequency: ['', Validators.required],
    //   vectors: this.formBuilder.array([this.initVectors()]),
    // });

  }

  saveAnalysis() {
    // call API to save customer

  }

  removeVector(row: any): void {

    this.rows.splice(row.$$index, 1)

  }


  addVector(): void {
    this.rows.push({name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3})

  }


}

