import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private router:Router) { 
    localStorage.clear();
  }

  ngOnInit() {
    
      this.router.navigate(['/login']);
    
  }

}
