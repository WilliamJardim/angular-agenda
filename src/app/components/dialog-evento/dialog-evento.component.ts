import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-evento',
  imports: [
    MatDialogModule
  ],
  templateUrl: './dialog-evento.component.html',
  styleUrl: './dialog-evento.component.scss'
})
export class DialogEventoComponent {
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: { titulo: string; conteudo: string } ){

  }
  
}
