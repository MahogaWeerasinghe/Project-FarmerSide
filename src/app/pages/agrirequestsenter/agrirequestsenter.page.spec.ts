import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrirequestsenterPage } from './agrirequestsenter.page';

describe('AgrirequestsenterPage', () => {
  let component: AgrirequestsenterPage;
  let fixture: ComponentFixture<AgrirequestsenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrirequestsenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrirequestsenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
