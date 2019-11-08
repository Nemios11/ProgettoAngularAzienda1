import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBiancaComponent } from './pagina-bianca.component';

describe('PaginaBiancaComponent', () => {
  let component: PaginaBiancaComponent;
  let fixture: ComponentFixture<PaginaBiancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBiancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBiancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
