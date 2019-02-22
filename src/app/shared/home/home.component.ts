import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { ViewRequest } from 'src/models/login';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  operations ={};
  constructor(private router:Router,private reqService: RequestService) {
    this.operations = JSON.parse(localStorage.getItem('navigation'));
   }
  toggle(e)
  {
    console.log(e);
  }
  ngOnInit() {
     
  }

  navigate(entity_name)
  {
    this.router.navigate([`/home/entities`,entity_name]);
  }

}
