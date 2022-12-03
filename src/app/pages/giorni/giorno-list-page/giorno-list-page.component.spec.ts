import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornoListPageComponent } from './giorno-list-page.component';

describe('GiornoListPageComponent', () => {
  let component: GiornoListPageComponent;
  let fixture: ComponentFixture<GiornoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornoListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
