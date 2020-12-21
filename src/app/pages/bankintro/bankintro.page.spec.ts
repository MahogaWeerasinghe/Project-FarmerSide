import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankintroPage } from './bankintro.page';

describe('BankintroPage', () => {
  let component: BankintroPage;
  let fixture: ComponentFixture<BankintroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankintroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
