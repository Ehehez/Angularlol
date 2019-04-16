import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesAddComponent } from './coches-add.component';

describe('CochesAddComponent', () => {
  let component: CochesAddComponent;
  let fixture: ComponentFixture<CochesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
