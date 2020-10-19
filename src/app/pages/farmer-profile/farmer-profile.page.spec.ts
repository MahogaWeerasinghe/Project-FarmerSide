import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmerProfilePage } from './farmer-profile.page';

describe('FarmerProfilePage', () => {
  let component: FarmerProfilePage;
  let fixture: ComponentFixture<FarmerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
