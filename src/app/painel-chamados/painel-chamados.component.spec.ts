import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelChamadosComponent } from './painel-chamados.component';

describe('PainelChamadosComponent', () => {
  let component: PainelChamadosComponent;
  let fixture: ComponentFixture<PainelChamadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelChamadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
