import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AihistoryPage } from './aihistory.page';

describe('AihistoryPage', () => {
  let component: AihistoryPage;
  let fixture: ComponentFixture<AihistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AihistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AihistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
