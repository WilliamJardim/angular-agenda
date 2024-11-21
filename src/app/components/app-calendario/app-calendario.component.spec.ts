import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalendarioComponent } from './app-calendario.component';

describe('AppCalendarioComponent', () => {
  let component: AppCalendarioComponent;
  let fixture: ComponentFixture<AppCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCalendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
