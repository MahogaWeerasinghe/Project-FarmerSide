import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPage } from './new.page';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

describe('NewPage', () => {
  let component: NewPage;
  let fixture: ComponentFixture<NewPage>;
  //ReactiveFormsModule,
  FormsModule 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
