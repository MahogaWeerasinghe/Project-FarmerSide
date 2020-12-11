import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewagrireportPage } from './viewagrireport.page';

describe('ViewagrireportPage', () => {
  let component: ViewagrireportPage;
  let fixture: ComponentFixture<ViewagrireportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewagrireportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewagrireportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
