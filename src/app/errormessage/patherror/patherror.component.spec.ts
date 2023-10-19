import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatherrorComponent } from './patherror.component';

describe('PatherrorComponent', () => {
  let component: PatherrorComponent;
  let fixture: ComponentFixture<PatherrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatherrorComponent]
    });
    fixture = TestBed.createComponent(PatherrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
