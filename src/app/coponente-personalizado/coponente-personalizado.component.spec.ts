import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoponentePersonalizadoComponent } from './coponente-personalizado.component';

describe('CoponentePersonalizadoComponent', () => {
  let component: CoponentePersonalizadoComponent;
  let fixture: ComponentFixture<CoponentePersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoponentePersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoponentePersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
