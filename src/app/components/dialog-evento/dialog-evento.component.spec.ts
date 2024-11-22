import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEventoComponent } from './dialog-evento.component';

describe('DialogEventoComponent', () => {
  let component: DialogEventoComponent;
  let fixture: ComponentFixture<DialogEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
