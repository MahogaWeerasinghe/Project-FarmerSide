import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicationFormViewPage } from './application-form-view.page';

describe('ApplicationFormViewPage', () => {
  let component: ApplicationFormViewPage;
  let fixture: ComponentFixture<ApplicationFormViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationFormViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
