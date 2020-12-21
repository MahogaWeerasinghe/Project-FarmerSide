import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRequestsPage } from './new-requests.page';

describe('NewRequestsPage', () => {
  let component: NewRequestsPage;
  let fixture: ComponentFixture<NewRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
