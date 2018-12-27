import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroChamadoComponent } from './cadastro-chamado.component';

describe('CadastroChamadoComponent', () => {
  let component: CadastroChamadoComponent;
  let fixture: ComponentFixture<CadastroChamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroChamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
