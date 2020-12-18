import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrihistoryPage } from './agrihistory.page';

describe('AgrihistoryPage', () => {
  let component: AgrihistoryPage;
  let fixture: ComponentFixture<AgrihistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrihistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrihistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
