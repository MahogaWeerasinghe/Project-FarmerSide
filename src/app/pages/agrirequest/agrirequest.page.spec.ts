import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrirequestPage } from './agrirequest.page';

describe('AgrirequestPage', () => {
  let component: AgrirequestPage;
  let fixture: ComponentFixture<AgrirequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrirequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrirequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
