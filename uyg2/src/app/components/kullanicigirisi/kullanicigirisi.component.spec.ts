import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicigirisiComponent } from './kullanicigirisi.component';

describe('KullanicigirisiComponent', () => {
  let component: KullanicigirisiComponent;
  let fixture: ComponentFixture<KullanicigirisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanicigirisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullanicigirisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
