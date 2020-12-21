import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRequestViewPage } from './new-request-view.page';

describe('NewRequestViewPage', () => {
  let component: NewRequestViewPage;
  let fixture: ComponentFixture<NewRequestViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequestViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
