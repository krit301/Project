import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    templateUrl:'./snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackBarComponent implements OnInit{
constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,
public snackbar: MatSnackBar){}
ngOnInit(): void {
    console.log(this.data);
}
dismiss(){
    this.snackbar.dismiss();
}
}