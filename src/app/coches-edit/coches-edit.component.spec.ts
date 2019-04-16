import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesEditComponent } from './coches-edit.component';

describe('CochesEditComponent', () => {
  let component: CochesEditComponent;
  let fixture: ComponentFixture<CochesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
