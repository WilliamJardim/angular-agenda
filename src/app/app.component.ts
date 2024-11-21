import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { AppCalendarioComponent } from './components/app-calendario/app-calendario.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ContainerComponent,
    AppCalendarioComponent
]

})
export class AppComponent {
  title = 'agenda';

  filtroEvento: string = ''

  aplicarFiltro(caracter: string): any[] {
    return [];
  }

}
