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
  public rows: Vector[] = [{name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3}];
  public columns: any[] = [
    {prop: 'name'},
    {name: 'gender'},
    {name: 'age'},
  ];


  constructor() {
  }

  ngOnInit() {



    // this.myForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.maxLength(20)]],
    //   frequency: ['', Validators.required],
    //   vectors: this.formBuilder.array([this.initVectors()]),
    // });

  }


  public updateValue(event, cell, cellValue, row): void {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }


  public saveAnalysis(): void {
    // call API to save customer

  }

  public removeVector(row: any): void {

    this.rows.splice(row.$$index, 1)

  }


  public addVector(): void {
    this.rows.push({name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3})

  }


}

