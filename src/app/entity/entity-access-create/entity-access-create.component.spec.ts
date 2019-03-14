import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAccessCreateComponent } from './entity-access-create.component';

describe('EntityAccessCreateComponent', () => {
  let component: EntityAccessCreateComponent;
  let fixture: ComponentFixture<EntityAccessCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAccessCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAccessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
