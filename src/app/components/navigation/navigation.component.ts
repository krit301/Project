import{Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
    ngOnInit(): void {}
    constructor(private router: Router){}
}
