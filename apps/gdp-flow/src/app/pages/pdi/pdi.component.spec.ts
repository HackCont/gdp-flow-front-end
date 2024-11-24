import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdiComponent } from './pdi.component';

describe('PdiComponent', () => {
  let component: PdiComponent;
  let fixture: ComponentFixture<PdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
