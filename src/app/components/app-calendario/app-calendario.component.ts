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

  dias: number[] = [];
  diasAnterior: number[] = [];
  diasFuturos: number[] = [];

  ngOnInit(): void {
    this.dias = Array.from({ length: this.ultimoDiaDoMes() }, (_, indice) => indice + 1);
    this.diasAnterior = [];
    this.diasFuturos = [];

    const ultimoDiasMesAnterior = this.ultimoDiaDoMesAnterior();

    for( let i = ultimoDiasMesAnterior-3 ; i < ultimoDiasMesAnterior ; i++ ){
      this.diasAnterior.push( i );
    }

    for( let i = 1 ; i < 10 ; i++ ){
      this.diasFuturos.push( i );
    }
  }

  public ultimoDiaDoMes(): number {
    const hoje = new Date();
    const proximoMes = hoje.getMonth() + 1; // Próximo mês (lembrando que os meses começam em 0)
    const ano = hoje.getFullYear();
    
    // Criar uma data para o primeiro dia do próximo mês
    const ultimoDia = new Date(ano, proximoMes, 0);
    return ultimoDia.getDate();
  }

  public ultimoDiaDoMesAnterior(): number {
    const hoje = new Date();
    const mesAnterior = hoje.getMonth(); // Mês anterior (lembre-se de que os meses começam em 0)
    const ano = hoje.getFullYear();
    
    // Criar uma data para o primeiro dia do mês atual e subtrair 1 dia
    const ultimoDiaAnterior = new Date(ano, mesAnterior, 0);
    return ultimoDiaAnterior.getDate();
  }
}
