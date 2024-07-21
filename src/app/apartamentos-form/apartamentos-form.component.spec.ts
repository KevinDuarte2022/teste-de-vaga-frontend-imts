import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosFormComponent } from './apartamentos-form.component';

describe('ApartamentosFormComponent', () => {
  let component: ApartamentosFormComponent;
  let fixture: ComponentFixture<ApartamentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartamentosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
