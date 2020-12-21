import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankloandetailsPage } from './bankloandetails.page';

describe('BankloandetailsPage', () => {
  let component: BankloandetailsPage;
  let fixture: ComponentFixture<BankloandetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloandetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankloandetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
