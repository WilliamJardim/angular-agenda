import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calendario',
  imports: [
    CommonModule
  ],
  templateUrl: './app-calendario.component.html',
  styleUrl: './app-calendario.component.scss'
})
export class AppCalendarioComponent {
   
  // Array
  dias = Array.from({ length: 31 }, (_, indice) => indice + 1);

}
