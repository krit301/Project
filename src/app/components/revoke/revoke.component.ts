import{Component, OnInit, ViewChild} from '@angular/core';
import{ RevokeService} from 'src/app/services/revoke.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'revoke',
    templateUrl: './revoke.component.html',
    styleUrls: ['./revoke.component.scss']
})
export class RevokeComponent implements OnInit{
    @ViewChild('f') form: any;
    public userData= {
        msId:'',
        manager:'',
        revocationType:'',
        vdiUsername:'',
        hrbp:'',
        emailId:'',
        managerEmailId:'',
        entitledVdi:'',
        dor:'',
        location:''
    };
    ngOnInit(): void {
        
    }
    constructor(private snackBar: MatSnackBar, private router: Router,private revokeService:RevokeService){   
    }
    onSubmit(){
        let data={
            userid:this.userData.emailId
        }
        this.revokeService.revokeAccess(data).subscribe(
            (success:any)=>{
                console.log(success);
                if(window.confirm('The user '+ success.displayName +'has been deleted sucessfully!')){
                this.form.reset();
                }
            },
            (error)=>{
                
            });
        //subscribe to the api and on success response show success result else the error
        // this.alertMessage();
    }
    onReset(): void {
        this.form.reset();
      }
}
