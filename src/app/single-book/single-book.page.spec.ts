import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleBookPage } from './single-book.page';

describe('SingleBookPage', () => {
  let component: SingleBookPage;
  let fixture: ComponentFixture<SingleBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
