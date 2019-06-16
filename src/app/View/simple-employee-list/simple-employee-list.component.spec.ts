import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEmployeeListComponent } from './simple-employee-list.component';

describe('SimpleEmployeeListComponent', () => {
  let component: SimpleEmployeeListComponent;
  let fixture: ComponentFixture<SimpleEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
