import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewExpensePage } from './add-new-expense.page';

describe('AddNewExpensePage', () => {
  let component: AddNewExpensePage;
  let fixture: ComponentFixture<AddNewExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
