import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnfermerasComponent } from './add-enfermeras.component';

describe('AddEnfermerasComponent', () => {
  let component: AddEnfermerasComponent;
  let fixture: ComponentFixture<AddEnfermerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnfermerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnfermerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
