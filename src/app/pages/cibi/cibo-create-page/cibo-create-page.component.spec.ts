import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboCreatePageComponent } from './cibo-create-page.component';

describe('CiboCreatePageComponent', () => {
  let component: CiboCreatePageComponent;
  let fixture: ComponentFixture<CiboCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiboCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiboCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
