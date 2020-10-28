import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangePwPage } from './change-pw.page';

describe('ChangePwPage', () => {
  let component: ChangePwPage;
  let fixture: ComponentFixture<ChangePwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
