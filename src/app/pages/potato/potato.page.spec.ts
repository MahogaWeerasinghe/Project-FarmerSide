import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PotatoPage } from './potato.page';

describe('PotatoPage', () => {
  let component: PotatoPage;
  let fixture: ComponentFixture<PotatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PotatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
