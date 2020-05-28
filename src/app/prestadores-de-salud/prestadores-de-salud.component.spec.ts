import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresDeSaludComponent } from './prestadores-de-salud.component';

describe('PrestadoresDeSaludComponent', () => {
  let component: PrestadoresDeSaludComponent;
  let fixture: ComponentFixture<PrestadoresDeSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresDeSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresDeSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
