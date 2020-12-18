import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AihistorydetailsPage } from './aihistorydetails.page';

describe('AihistorydetailsPage', () => {
  let component: AihistorydetailsPage;
  let fixture: ComponentFixture<AihistorydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AihistorydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AihistorydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
