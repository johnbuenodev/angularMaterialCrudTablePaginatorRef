import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdicionarComponent } from './item-adicionar.component';

describe('ItemAdicionarComponent', () => {
  let component: ItemAdicionarComponent;
  let fixture: ComponentFixture<ItemAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
