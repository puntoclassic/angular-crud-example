import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiboListPageComponent } from './cibo-list-page.component';

describe('CiboListPageComponent', () => {
  let component: CiboListPageComponent;
  let fixture: ComponentFixture<CiboListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiboListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiboListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
