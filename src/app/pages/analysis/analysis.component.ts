import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Vector } from './vector.interface';
import { Analysis } from './analysis.interface';


@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {


  public editing = {};
  public rows: Vector[] = [{name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3, wert4: 'asd', wert5: 'asdasd'}];
  private analysis: Analysis;
  public format = {
    add: 'add Messgröße',
    remove: 'remove Messgröße',
    all: 'All',
    none: 'None',
    direction: 'left-to-right',
  };
  public source: any = [
    {
      '_id': 1,
      '_name': 'ACT [ms]',
    },
    {
      '_id': 2,
      '_name': 'CST [ms]',
    },
    {
      '_id': 3,
      '_name': 'CAWT [ms]',
    },
  ];
  private confirmed: any = [];
  private finalFormData = [];

  public analysisForm = this.formBuilder.group({
    name: ['', Validators.required],
    datasource: ['', Validators.required],
    frequency: ['', Validators.required],
    placeholder1: ['', Validators.required],
    placeholder2: ['', Validators.required],
    placeholder3: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
  }

  saveAnalysis(): void {


    this.analysis = {
      name: this.analysisForm.controls.name.value,
      frequency: this.analysisForm.controls.frequency.value,
      datasource: this.analysisForm.controls.datasource.value,
      placeholder1: this.analysisForm.controls.placeholder1.value,
      placeholder2: this.analysisForm.controls.placeholder2.value,
      placeholder3: this.analysisForm.controls.placeholder3.value,
      vectors: this.rows,
      messgroesen: this.confirmed,
    };


    console.log(this.analysis)


  }


  public updateValue(event, cell, cellValue, row): void {
    this.editing[`${row.$$index}-${cell}`] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }


  public removeVector(row: any) {
    if (window.confirm('Remove Vector?')) {
      this.rows.splice(row.$$index, 1);
    }

  }

  public addVector(): void {
    this.rows.push({name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3, wert4: 'asd', wert5: 'asd'});

  }


}

