import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface IConfirmationDialogData {
  title: string;
  message: string;
  width?: string;
  height?: string;
}

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: IConfirmationDialogData,
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
  
}


