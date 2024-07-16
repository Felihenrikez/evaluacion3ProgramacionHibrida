import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemBusquedaComponent } from './item-busqueda.component';

describe('ItemBusquedaComponent', () => {
  let component: ItemBusquedaComponent;
  let fixture: ComponentFixture<ItemBusquedaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemBusquedaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
