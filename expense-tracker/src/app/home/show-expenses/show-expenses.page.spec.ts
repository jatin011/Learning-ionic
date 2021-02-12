import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowExpensesPage } from './show-expenses.page';

describe('ShowExpensesPage', () => {
  let component: ShowExpensesPage;
  let fixture: ComponentFixture<ShowExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
