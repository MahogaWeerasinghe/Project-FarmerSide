import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DohistoryPage } from './dohistory.page';

describe('DohistoryPage', () => {
  let component: DohistoryPage;
  let fixture: ComponentFixture<DohistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DohistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
