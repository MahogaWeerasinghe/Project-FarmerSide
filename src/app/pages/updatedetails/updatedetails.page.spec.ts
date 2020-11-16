import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatedetailsPage } from './updatedetails.page';

describe('UpdatedetailsPage', () => {
  let component: UpdatedetailsPage;
  let fixture: ComponentFixture<UpdatedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
