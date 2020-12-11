import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AiofficerPage } from './aiofficer.page';

describe('AiofficerPage', () => {
  let component: AiofficerPage;
  let fixture: ComponentFixture<AiofficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiofficerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AiofficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
