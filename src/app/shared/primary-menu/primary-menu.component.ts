import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.css']
})
export class PrimaryMenuComponent implements OnInit {
  @Output() menuToggle: EventEmitter<any> = new EventEmitter();
  
  constructor(private router:Router) 
  { }

  menuClick()
  {
    this.menuToggle.emit(null);
  }
  signOut()
  {
    this.router.navigate(["/signout"]);
  }
  ngOnInit() {
  }

}
