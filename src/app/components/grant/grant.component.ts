import{Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { GrantService } from 'src/app/services/grant.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'grant',
    templateUrl: './grant.component.html',
    styleUrls: ['./grant.component.scss']
})
export class GrantComponent implements OnInit{
    @ViewChild('f') form: any;
    public userData= {
        firstName:'',
        lastName:'',
        emailId:'',
        role:'',
        team:'',
        dob:'',
        location:'',
        client:'',
        password:'',
        managerEmailId:'',
        reqEmailProvisioning:'',
        reqVdiProvisioning:'',
        grade:'',
        phone:'',
    };
    ngOnInit(): void {
        
    }
    constructor(private grantService:GrantService,private _snackBar:MatSnackBar,private dialog: MatDialog){}
    openSnackBar(data:any){
        this._snackBar.openFromComponent(GrantComponent,{
            duration:4000,
            data:data
        })
    }
    onSubmit(){
        console.log(this.userData.firstName, this.userData.lastName, this.userData.emailId, this.userData.role, this.userData.team, this.userData.dob, this.userData.location, this.userData.client, this.userData.password, this.userData.managerEmailId, this.userData.reqEmailProvisioning, this.userData.reqVdiProvisioning, this.userData.grade, this.userData.phone);
        let data={
            displayName: this.userData.firstName+" "+this.userData.lastName,
            mailnickname: this.userData.firstName+this.userData.lastName,
            password: this.userData.password,
            upn: this.userData.emailId,
            jobTitle:this.userData.role,
            mail: this.userData.emailId,
            mobilePhone: this.userData.phone,
            officeLocation: this.userData.location,
            preferredLanguage: "En",
            surname: this.userData.lastName,
            givenName: this.userData.firstName,
            businessPhones: [this.userData.phone]
        }
        this.grantService.addGrantAccess(data).subscribe(
            (success:any)=>{
                this.openSnackBar('The user '+this.userData.firstName+" "+this.userData.lastName +' has been added sucessfully!');
                if(window.confirm('The user '+this.userData.firstName+" "+this.userData.lastName +' has been added sucessfully!')){
                this.form.reset();
                }
            },
            (error)=>{
                this.openSnackBar("Data Not Added");
            });
    }
    onReset(): void {
        this.form.reset();
      }
}
