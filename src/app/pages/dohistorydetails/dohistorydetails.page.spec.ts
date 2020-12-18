import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DohistorydetailsPage } from './dohistorydetails.page';

describe('DohistorydetailsPage', () => {
  let component: DohistorydetailsPage;
  let fixture: ComponentFixture<DohistorydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohistorydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DohistorydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
