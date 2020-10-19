import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaddyPage } from './paddy.page';

describe('PaddyPage', () => {
  let component: PaddyPage;
  let fixture: ComponentFixture<PaddyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaddyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
