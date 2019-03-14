import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { ViewRequest } from 'src/models/login';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

class EntityAutoComplete
{
  entity_code :string;
  entity_name : string
}
@Component({
  selector: 'app-entity-access-create',
  templateUrl: './entity-access-create.component.html',
  styleUrls: ['./entity-access-create.component.css']
})
export class EntityAccessCreateComponent implements OnInit {

  constructor(private fb : FormBuilder,private service : RequestService ) { 
  }

  entityData :EntityAutoComplete[];
  filteredEntities : Observable<EntityAutoComplete[]>;
  formMainGroup: FormGroup;
  ngOnInit() {

    let request :ViewRequest = {"filters":{"entity_active": true},"sortFields":"-_id","removeColumns":"-_id -entity_access -entity_schema -entity_active -__v","first":0,"rows":10};
    this.service.view(request,'entity__view').subscribe(data=>{
      this.entityData = data.body.body.data;
      this.filteredEntities = this.formMainGroup.controls.entity_code.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.entityData.slice())
      );
      
      this.formMainGroup.valueChanges.subscribe(value =>
        {
          
          
          if(_.find(this.entityData, { 'entity_code': value.entity_code })=== undefined)
          {
            this.formMainGroup.controls.entity_code.setErrors({'incorrect': true});
          }
          
        });
      //console.log(this.entityData );
    });


    this.formMainGroup = this.fb.group({
      entity_code :['',Validators.required],
      entity_access_code :['',Validators.required],
      entity_access_js:[''],
      entity_access_active:[true]
    });
  }

  _filterStates(value: string): EntityAutoComplete[] {
    const filterValue = value.toLowerCase();
    return this.entityData.filter(entity => entity.entity_code.toLowerCase().indexOf(filterValue) === 0);
  }
  onSubmit() : void
  {
    if(this.formMainGroup.valid)
    {
      this.service.create(this.formMainGroup.value,'entityaccess__create').subscribe();
    }
  }

}
