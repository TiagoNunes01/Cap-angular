import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComponeteComponent } from './segundo-componete.component';

describe('SegundoComponeteComponent', () => {
  let component: SegundoComponeteComponent;
  let fixture: ComponentFixture<SegundoComponeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoComponeteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoComponeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
