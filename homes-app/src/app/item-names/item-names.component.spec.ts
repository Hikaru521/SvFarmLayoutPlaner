import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNamesComponent } from './item-names.component';

describe('ItemNamesComponent', () => {
  let component: ItemNamesComponent;
  let fixture: ComponentFixture<ItemNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemNamesComponent]
    });
    fixture = TestBed.createComponent(ItemNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
