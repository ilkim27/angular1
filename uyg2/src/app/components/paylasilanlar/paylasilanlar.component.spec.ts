import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylasilanlarComponent } from './paylasilanlar.component';

describe('PaylasilanlarComponent', () => {
  let component: PaylasilanlarComponent;
  let fixture: ComponentFixture<PaylasilanlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaylasilanlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaylasilanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
