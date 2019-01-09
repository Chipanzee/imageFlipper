import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageFlipperComponent } from "./image-flipper.component";

describe("ImageSplitterComponent", () => {
  let component: ImageFlipperComponent;
  let fixture: ComponentFixture<ImageFlipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFlipperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFlipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
