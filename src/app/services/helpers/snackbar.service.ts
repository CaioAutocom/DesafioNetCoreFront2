import { Injectable } from "@angular/core";
import { CustomSnackBarComponent } from "../../components/utils/custom-snack-bar/custom-snack-bar.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
  })
  export class SnackbarService {
  
    constructor(private _snackBar: MatSnackBar) { }
  
    openCustomSnackbar(message: string, type: string = 'success', duration: number = 2000) {
        this._snackBar.openFromComponent(CustomSnackBarComponent, {
          data: { message, type },
          duration: duration
        });
    }
  }