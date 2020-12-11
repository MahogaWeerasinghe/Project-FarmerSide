import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoofficerequestenterPage } from './doofficerequestenter.page';

describe('DoofficerequestenterPage', () => {
  let component: DoofficerequestenterPage;
  let fixture: ComponentFixture<DoofficerequestenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoofficerequestenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoofficerequestenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
