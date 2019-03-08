import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<EntityDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
