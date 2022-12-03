import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoEditPageComponent } from './giorno-edit-page.component';

describe('GiornoEditPageComponent', () => {
  let component: GiornoEditPageComponent;
  let fixture: ComponentFixture<GiornoEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornoEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
