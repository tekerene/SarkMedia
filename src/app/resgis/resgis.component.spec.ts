import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisComponent } from './resgis.component';

describe('ResgisComponent', () => {
  let component: ResgisComponent;
  let fixture: ComponentFixture<ResgisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
