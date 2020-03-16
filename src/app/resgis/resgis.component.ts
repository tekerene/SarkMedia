import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';
@Component({
  selector: 'app-resgis',
  templateUrl: './resgis.component.html',
  styleUrls: ['./resgis.component.css']
})
export class ResgisComponent implements OnInit {
  currentUser: User;
  constructor( private router: Router,
    private authenticationService: AuthenticationService){
this.authenticationService.currentUser.subscribe(x =>this.currentUser = x);
    }
logout() {
this.authenticationService.logout();
this.router.navigate(['/login']);
}

  ngOnInit() {
  }

}
