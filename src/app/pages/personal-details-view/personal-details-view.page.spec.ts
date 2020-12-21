import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalDetailsViewPage } from './personal-details-view.page';

describe('PersonalDetailsViewPage', () => {
  let component: PersonalDetailsViewPage;
  let fixture: ComponentFixture<PersonalDetailsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
