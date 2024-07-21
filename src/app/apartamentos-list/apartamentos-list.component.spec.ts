import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosListComponent } from './apartamentos-list.component';

describe('ApartamentosListComponent', () => {
  let component: ApartamentosListComponent;
  let fixture: ComponentFixture<ApartamentosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartamentosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
