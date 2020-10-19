import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropPage } from './crop.page';



describe('CropPage', () => {
  let component: CropPage;
  let fixture: ComponentFixture<CropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
