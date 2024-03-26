import { Component } from '@angular/core';
import { CustomDialogComponent } from '../../utils/custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _dialog: MatDialog,
     private router: Router) {}
     onClickBtnSair(): void {
      const dialogRef = this._dialog.open(CustomDialogComponent, {
        width: '300px',
        height: '200px',
        data: {
          title: 'Deslogando...',
          message: 'Tem certeza que deseja sair?',
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.router.navigate(['/login']);
        }
      });
    }

  }