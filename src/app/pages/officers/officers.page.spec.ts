import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficersPage } from './officers.page';

describe('OfficersPage', () => {
  let component: OfficersPage;
  let fixture: ComponentFixture<OfficersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
