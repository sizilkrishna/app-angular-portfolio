import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgoartComponent } from './mgoart.component';

describe('MgoartComponent', () => {
  let component: MgoartComponent;
  let fixture: ComponentFixture<MgoartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgoartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgoartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
