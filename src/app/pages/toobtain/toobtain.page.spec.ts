import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToobtainPage } from './toobtain.page';

describe('ToobtainPage', () => {
  let component: ToobtainPage;
  let fixture: ComponentFixture<ToobtainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToobtainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToobtainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
