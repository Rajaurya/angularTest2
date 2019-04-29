import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout0Component } from './layout0.component';

describe('Layout0Component', () => {
  let component: Layout0Component;
  let fixture: ComponentFixture<Layout0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
