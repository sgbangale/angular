import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {

  operations ={};
  @Input("entity_code") entity_code :string;
  constructor() { }

  ngOnInit() {

    let entityOperation = JSON.parse(localStorage.getItem('navigation'));    
    this.operations = entityOperation['AccessibleOperations'][this.entity_code];
  }

}
