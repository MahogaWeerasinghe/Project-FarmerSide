import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankloginPage } from './banklogin.page';

describe('BankloginPage', () => {
  let component: BankloginPage;
  let fixture: ComponentFixture<BankloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
