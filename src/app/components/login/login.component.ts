import{Component, OnInit,ViewChild} from '@angular/core';
// import{ LoginService} from 'src/app/services/login.service';
// import{Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  
  @ViewChild('f') form: any;
  public login= {
    username: '',
    password: ''
  };
 

  onSubmit(): void {
    console.log(this.login.username,this.login.password);
    this.router.navigate(['access-page']);
  }

  onReset(): void {
    this.form.reset();
  }
}
