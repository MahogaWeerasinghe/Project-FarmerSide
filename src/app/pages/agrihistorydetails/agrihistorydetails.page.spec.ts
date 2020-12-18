import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrihistorydetailsPage } from './agrihistorydetails.page';

describe('AgrihistorydetailsPage', () => {
  let component: AgrihistorydetailsPage;
  let fixture: ComponentFixture<AgrihistorydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrihistorydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrihistorydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
