import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomieComponent } from './create-roomie.component';

describe('CreateRoomieComponent', () => {
  let component: CreateRoomieComponent;
  let fixture: ComponentFixture<CreateRoomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
