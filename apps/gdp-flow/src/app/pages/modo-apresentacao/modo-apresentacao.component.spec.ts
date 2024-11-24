import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModoApresentacaoComponent } from './modo-apresentacao.component';

describe('ModoApresentacaoComponent', () => {
  let component: ModoApresentacaoComponent;
  let fixture: ComponentFixture<ModoApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModoApresentacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
