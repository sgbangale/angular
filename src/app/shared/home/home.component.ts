import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import * as _ from 'lodash';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessibleEntities =[];
  constructor(private router:Router,private reqService: RequestService, private accountService : AccountService) {
    this.accessibleEntities = this.accountService.getSessionValues('accessible_entities') ;
   }
  toggle(e)
  {
    
  }
  ngOnInit() {
     
  }

  navigate(entity_name)
  {
    this.router.navigate([`/home/entities`,entity_name]);
  }

}
