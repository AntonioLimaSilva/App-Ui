import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-content.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;

  input: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError() {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
