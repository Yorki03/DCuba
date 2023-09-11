import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentenasPage } from './centenas.page';

describe('CentenasPage', () => {
  let component: CentenasPage;
  let fixture: ComponentFixture<CentenasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
