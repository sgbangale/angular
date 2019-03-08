import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {
  operations ={};
  constructor(private router : ActivatedRoute) { }
  ngOnInit() {
    let entityOperation = JSON.parse(localStorage.getItem('navigation'));    
    this.router.params.subscribe((parmas) => {
      this.operations = entityOperation['AccessibleOperations'][parmas['entity_code']];
    });
  }

}
