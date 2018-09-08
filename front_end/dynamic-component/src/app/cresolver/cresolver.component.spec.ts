import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CresolverComponent } from './cresolver.component';

describe('CresolverComponent', () => {
  let component: CresolverComponent;
  let fixture: ComponentFixture<CresolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CresolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CresolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
