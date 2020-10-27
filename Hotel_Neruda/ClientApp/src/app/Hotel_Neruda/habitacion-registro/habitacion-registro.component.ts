import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../models/habitacion';

@Component({
  selector: 'app-habitacion-registro',
  templateUrl: './habitacion-registro.component.html',
  styleUrls: ['./habitacion-registro.component.css']
})
export class HabitacionRegistroComponent implements OnInit {
  habitacion: Habitacion;

  constructor() { }

  ngOnInit(): void {
    this.habitacion = new Habitacion();
  }

  add():void {

  }

}
