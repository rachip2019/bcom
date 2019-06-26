import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordTvComponent } from './dashbord-tv.component';

describe('DashbordTvComponent', () => {
  let component: DashbordTvComponent;
  let fixture: ComponentFixture<DashbordTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
