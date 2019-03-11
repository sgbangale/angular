import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {
  operations ={};
  constructor(private router : ActivatedRoute, private accountService : AccountService) { }
  ngOnInit() {
    let entityOperation =    this.accountService.getSessionValues('accessible_operations')
    this.router.params.subscribe((parmas) => {
      this.operations = entityOperation[parmas['entity_code']];
    });
  }

}
