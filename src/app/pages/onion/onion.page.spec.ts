import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnionPage } from './onion.page';

describe('OnionPage', () => {
  let component: OnionPage;
  let fixture: ComponentFixture<OnionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
