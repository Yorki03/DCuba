import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParlesPage } from './parles.page';

describe('ParlesPage', () => {
  let component: ParlesPage;
  let fixture: ComponentFixture<ParlesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
