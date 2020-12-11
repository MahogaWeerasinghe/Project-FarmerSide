import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoofficerequestPage } from './doofficerequest.page';

describe('DoofficerequestPage', () => {
  let component: DoofficerequestPage;
  let fixture: ComponentFixture<DoofficerequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoofficerequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoofficerequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
