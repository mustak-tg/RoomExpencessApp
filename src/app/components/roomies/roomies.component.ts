import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomies',
  templateUrl: './roomies.component.html',
  styleUrls: ['./roomies.component.css']
})
export class RoomiesComponent implements OnInit {

  constructor() {


   }
   columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  ngOnInit() {
  }

}
