import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrCdComponent } from './nbr-cd.component';

describe('NbrCdComponent', () => {
  let component: NbrCdComponent;
  let fixture: ComponentFixture<NbrCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
