import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizavelComponent } from './pipe-customizavel.component';

describe('PipeCustomizavelComponent', () => {
  let component: PipeCustomizavelComponent;
  let fixture: ComponentFixture<PipeCustomizavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomizavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustomizavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
