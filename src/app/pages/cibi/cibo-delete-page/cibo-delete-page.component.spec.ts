import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboDeletePageComponent } from './cibo-delete-page.component';

describe('CiboDeletePageComponent', () => {
  let component: CiboDeletePageComponent;
  let fixture: ComponentFixture<CiboDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiboDeletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiboDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
