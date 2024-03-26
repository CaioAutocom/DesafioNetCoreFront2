import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ESnackbarType } from '../../../enums/Snackbar-type.enum';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrl: './custom-snack-bar.component.scss'
})
export class CustomSnackBarComponent implements OnInit {
  progressValue = 100;
  snackbarClass: string = "";

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string, type: ESnackbarType }) {
    // switch (data.type) {
    //   case ESnackbarType.Success:
    //     this.snackbarClass = 'success-snackbar';
    //     break;
    //   case ESnackbarType.Warning:
    //     this.snackbarClass = 'warning-snackbar';
    //     break;
    //   case ESnackbarType.Error:
    //     this.snackbarClass = 'error-snackbar';
    //     break;
    //   default:
    //     this.snackbarClass = '';
    //     break;
    // }
  }
  ngOnInit(): void {
    const durationInSeconds = 2;
    this.snackbarClass = this.data.type;
    const interval = setInterval(() => {
      this.progressValue -= 100 / (durationInSeconds * 8.8);
      if (this.progressValue <= 0) {
        clearInterval(interval);
      }
    }, 100);
  }
}
