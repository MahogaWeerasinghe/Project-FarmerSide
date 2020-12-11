import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewaireportPage } from './viewaireport.page';

describe('ViewaireportPage', () => {
  let component: ViewaireportPage;
  let fixture: ComponentFixture<ViewaireportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaireportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewaireportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
