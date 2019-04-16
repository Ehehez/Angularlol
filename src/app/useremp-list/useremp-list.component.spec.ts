import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserempListComponent } from './useremp-list.component';

describe('UserempListComponent', () => {
  let component: UserempListComponent;
  let fixture: ComponentFixture<UserempListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserempListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserempListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
