import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VillainComponent } from './villain.component';

describe('VillainComponent', () => {
  let component: VillainComponent;
  let fixture: ComponentFixture<VillainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
