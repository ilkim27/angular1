import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayfamComponent } from './sayfam.component';

describe('SayfamComponent', () => {
  let component: SayfamComponent;
  let fixture: ComponentFixture<SayfamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayfamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayfamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
