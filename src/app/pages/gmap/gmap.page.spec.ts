import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GmapPage } from './gmap.page';

describe('GmapPage', () => {
  let component: GmapPage;
  let fixture: ComponentFixture<GmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
