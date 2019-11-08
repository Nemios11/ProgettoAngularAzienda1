import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormComponent } from './component-form.component';

describe('ComponentFormComponent', () => {
  let component: ComponentFormComponent;
  let fixture: ComponentFixture<ComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
