import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamesComponent } from './usernames.component';

describe('UsernamesComponent', () => {
  let component: UsernamesComponent;
  let fixture: ComponentFixture<UsernamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
