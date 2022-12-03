import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboEditPageComponent } from './cibo-edit-page.component';

describe('CiboEditPageComponent', () => {
  let component: CiboEditPageComponent;
  let fixture: ComponentFixture<CiboEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiboEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiboEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
