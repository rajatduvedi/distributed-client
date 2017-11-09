import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDashBoardComponent } from './super-admin-dash-board.component';

describe('SuperAdminDashBoardComponent', () => {
  let component: SuperAdminDashBoardComponent;
  let fixture: ComponentFixture<SuperAdminDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
