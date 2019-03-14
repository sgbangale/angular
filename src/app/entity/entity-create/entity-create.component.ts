import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-entity-create",
  templateUrl: "./entity-create.component.html",
  styleUrls: ["./entity-create.component.css"]
})
export class EntityCreateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  formMainGroup: FormGroup;

  onSubmit(): void {
    console.log(this.formMainGroup.value);
  }

  createAttribute(): FormGroup {
    return this.fb.group({
      field_code: ["", [Validators.required]],
      field_type: ["", [Validators.required]],
      field_required: [true, [Validators.required]]
    });
  }


  addAttribute(): void {
    (this.formMainGroup.controls.entity_schema as FormArray).push(
      this.createAttribute()
    );
  }

  ngOnInit() {
    this.formMainGroup = this.fb.group({
      entity_access : [],
      entity_code: [],
      entity_name: [],
      entity_active: true,
      entity_schema: this.fb.array(
        [
          this.createAttribute()
        ]
      )
    });
  }
}
