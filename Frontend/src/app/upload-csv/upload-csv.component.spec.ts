import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCSVComponent } from './upload-csv.component';

describe('UploadCSVComponent', () => {
  let component: UploadCSVComponent;
  let fixture: ComponentFixture<UploadCSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
