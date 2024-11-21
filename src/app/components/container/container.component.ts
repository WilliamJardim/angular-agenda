import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCalendarioComponent } from '../app-calendario/app-calendario.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
