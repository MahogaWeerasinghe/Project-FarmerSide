import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoofficerPage } from './doofficer.page';

describe('DoofficerPage', () => {
  let component: DoofficerPage;
  let fixture: ComponentFixture<DoofficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoofficerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoofficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
