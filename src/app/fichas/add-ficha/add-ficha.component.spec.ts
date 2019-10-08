import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFichaComponent } from './add-ficha.component';

describe('AddFichaComponent', () => {
  let component: AddFichaComponent;
  let fixture: ComponentFixture<AddFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
