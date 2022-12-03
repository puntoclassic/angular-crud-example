import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoDeletePageComponent } from './giorno-delete-page.component';

describe('GiornoDeletePageComponent', () => {
  let component: GiornoDeletePageComponent;
  let fixture: ComponentFixture<GiornoDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornoDeletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornoDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
