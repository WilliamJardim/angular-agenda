import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEventoComponent } from '../../components/dialog-evento/dialog-evento.component';
import { MatIconModule } from '@angular/material/icon';
import Semana from './intefaces/Semana';

@Component({
  selector: 'app-calendario',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './app-calendario.component.html',
  styleUrl: './app-calendario.component.scss'
})
export class AppCalendarioComponent {

  constructor(private dialog: MatDialog) {
    
  }

  mesAtual: number = 11;
  anoAtual: number = 2024;

  dias: number[] = [];
  diasAnterior: number[] = [];
  diasFuturos: number[] = [];

  segundas : number[] = [];
  tercas   : number[] = [];
  quartas  : number[] = [];
  quintas  : number[] = [];
  sextas   : number[] = [];
  sabados  : number[] = [];
  domingos : number[] = [];

  semanas  : Semana[] = [];
 
  ngOnInit(): void {
    this.dias = Array.from({ length: this.ultimoDiaDoMes() }, (_, indice) => indice + 1);
    this.diasAnterior = [];
    this.diasFuturos = [];

    //Agrupa os dias
    for( let i = 0 ; i < this.dias.length ; i++ )
    {
      const numeroDia = this.dias[i];
      const nomeDia   = this.verificarDiaSemana(numeroDia, this.mesAtual, this.anoAtual);

      switch(nomeDia){
        case 'segunda-feira':
          this.segundas.push(numeroDia);
          break;

        case 'terça-feira':
          this.tercas.push(numeroDia);
          break;

        case 'quarta-feira':
          this.quartas.push(numeroDia);
          break;

        case 'quinta-feira':
          this.quintas.push(numeroDia);
          break;

        case 'sexta-feira':
          this.sextas.push(numeroDia);
          break;

        case 'sábado':
          this.sabados.push(numeroDia);
          break;

        case 'domingo':
          this.domingos.push(numeroDia);
          break;
      }

    }

    //Agrupa em semanas
    for( let i = 0 ; i <= 4 ; i++ )
    {
      this.semanas[i] = {
        segunda : this.segundas[i],
        terca   : this.tercas[i],
        quarta  : this.quartas[i],
        quinta  : this.quintas[i],
        sexta   : this.sextas[i],
        sabado  : this.sabados[i],
        domingo : this.domingos[i]
      } as Semana;
    }

    const ultimoDiasMesAnterior = this.ultimoDiaDoMesAnterior();

    for( let i = ultimoDiasMesAnterior-3 ; i < ultimoDiasMesAnterior ; i++ ){
      this.diasAnterior.push( i );
    }

    for( let i = 1 ; i < 10 ; i++ ){
      this.diasFuturos.push( i );
    }
  }

  public verificarDiaSemana(dia: number, mes: number, ano: number): string {
    // O mês no objeto Date é baseado em zero (0 = janeiro, 11 = dezembro)
    const data = new Date(ano, mes - 1, dia);
    
    // Obtém o índice do dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const indiceDia = data.getDay();
    
    return diasSemana[indiceDia];
  }

  public openEventoDialog() {
    const dialogRef = this.dialog.open(DialogEventoComponent, {
      width: '300px',
      data: {
        titulo: 'Evento',
        conteudo: 'Veja os eventos para esse dia:'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
      console.log('Resultado:', result);
    });
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
