import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayscriptComponent } from './dayscript.component';

describe('DayscriptComponent', () => {
  let component: DayscriptComponent;
  let fixture: ComponentFixture<DayscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
