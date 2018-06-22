import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Catão Refeição', value: 'REF'}
  ];

  constructor() { }

  ngOnInit() {
  }

}