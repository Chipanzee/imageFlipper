import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "image-flipper",
  templateUrl: "./image-flipper.component.html",
  styleUrls: ["./image-flipper.component.less"]
})
export class ImageFlipperComponent implements OnInit {
  constructor() {}

  imageArray: number[];
  puzzleStyle: any;
  imageStyle: any;
  blackImageStyle: string;
  mainDiv: any;
  puzzledDiv: any;

  @Input() rowsNumber: number;
  @Input() columnsNumber: number;
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  @Input() puzzleMargin: number;
  @Input() startSide: string;
  @Input() backColor: string;

  ngOnInit() {
    this.startSide = "back";

    this.mainDiv = $("#mainDiv")[0];
    this.puzzledDiv = $("#puzzledDiv")[0];

    this.imageArray = [];
    let imageArraySize: number = this.rowsNumber * this.columnsNumber;
    for (let index = 0; index < imageArraySize; index++) {
      this.imageArray.push(0);
    }

    this.calculatePuzzleDimensions();
  }

  /* (puzzle_height+puzzle_margin*2)*puzzle per row*/
  calculatePuzzleDimensions() {
    let puzzleWidth =
      (this.imageWidth - this.columnsNumber * 2 * this.puzzleMargin) /
      this.columnsNumber;

    let puzzleHeight =
      (this.imageHeight - (this.rowsNumber * 2 - 1) * this.puzzleMargin) /
      this.rowsNumber;

    this.puzzleStyle = {
      width: puzzleWidth,
      heigth: puzzleHeight,
      margin: this.puzzleMargin
    };

    this.calculateBlackImageDimensions();
  }

  calculateBlackImageDimensions() {
    let blackImageWidth = this.imageWidth - this.puzzleMargin;
    this.blackImageStyle =
      "{width:" + blackImageWidth + ";heigth:" + this.imageHeight + ";}";
  }

  flipImage(event) {
    var target = event.target;
    this.mainDiv == null ? (this.mainDiv = target.closest("#mainDiv")) : null;

    if (this.mainDiv.classList[0].includes("fullImage")) {
      this.flipToBack();
    } else {
      this.flipToFront();
    }
  }

  flipToBack() {
    this.mainDiv.classList.remove(this.mainDiv.classList[0]);
    this.mainDiv.classList.add("isFlipping");
    setTimeout(() => {
      this.mainDiv.classList.add("fullBlackImage");
    }, 1600);
  }

  flipToFront() {
    this.mainDiv.classList.remove(this.mainDiv.classList[0]);
    this.mainDiv.classList.remove(this.mainDiv.classList[0]);

    setTimeout(() => {
      this.mainDiv.classList.add("fullImage");
    }, 1600);
  }
}
