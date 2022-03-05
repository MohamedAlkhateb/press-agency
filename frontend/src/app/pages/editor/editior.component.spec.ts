import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditiorComponent } from './editior.component';

describe('EditiorComponent', () => {
  let component: EditiorComponent;
  let fixture: ComponentFixture<EditiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
