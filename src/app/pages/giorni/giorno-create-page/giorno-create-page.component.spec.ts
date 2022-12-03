import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoCreatePageComponent } from './giorno-create-page.component';

describe('GiornoCreatePageComponent', () => {
  let component: GiornoCreatePageComponent;
  let fixture: ComponentFixture<GiornoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornoCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
