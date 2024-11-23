import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterHeaderComponent } from './router-header.component';

describe('RouterHeaderComponent', () => {
  let component: RouterHeaderComponent;
  let fixture: ComponentFixture<RouterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
