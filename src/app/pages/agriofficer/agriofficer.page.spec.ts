import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgriofficerPage } from './agriofficer.page';

describe('AgriofficerPage', () => {
  let component: AgriofficerPage;
  let fixture: ComponentFixture<AgriofficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriofficerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgriofficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
