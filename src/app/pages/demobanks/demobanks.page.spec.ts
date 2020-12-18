import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemobanksPage } from './demobanks.page';

describe('DemobanksPage', () => {
  let component: DemobanksPage;
  let fixture: ComponentFixture<DemobanksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemobanksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemobanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
