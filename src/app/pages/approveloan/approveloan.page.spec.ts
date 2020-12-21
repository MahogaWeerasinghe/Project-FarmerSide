import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveloanPage } from './approveloan.page';

describe('ApproveloanPage', () => {
  let component: ApproveloanPage;
  let fixture: ComponentFixture<ApproveloanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveloanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveloanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
