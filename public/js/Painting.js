import Lines from './Lines.js';
import Point from './Point.js';
import {paint, eraser} from './paintAndEraser.js';
import {getRealPoint} from './elementposition.js';

export default class Painting {
  constructor() {
    this.painting = [];
    this.zoom = 0;
    this.lines = 0;
    this.status = 'DRAW';
    this.startNewLine();
  }

  setStatus(status) {
    this.status = status;
  }

  painterAndEraser(event, canvas, context) {
    let painter = new Point(event.clientX, event.clientY, 0);
    getRealPoint(canvas, painter);
    if (this.status === 'PAINT') {
      paint(context, painter);
    }
    if (this.status === 'ERASE') {
      eraser(context, painter);
    }
  }

  reset() {
    this.painting = [];
    this.lines = 0;
    this.startNewLine();
  }

  drawPainting(context) {
      this.painting.forEach( line => {
        line.drawLines(context);
      });
  }

  addPainting(line) {
      this.painting.push(line);
  }

  startNewLine() {
      this.addPainting(new Lines());
  }

  draw(point, context) {

    for (let i = 0; i <= this.lines; i++) {
      if (this.painting[i].existsPointInOtherLine(point)) {
          this.painting[i].line = this.painting[i].mergeLines(this.painting[this.lines].line);
          this.painting[i].length++;
          this.painting.pop();
          this.lines--;
          this.painting[this.lines].drawLines(context);
          return;
      }
    }

    point.drawPoint(context);
    this.painting[this.lines].addPointToLine(point);
    this.painting[this.lines].drawLines(context);
  }

  addLine() {
      this.lines++;
      this.startNewLine();
  }

  removeLastAction() {
    if(this.painting[this.lines].length <= 1 && this.lines > 0) {
      this.lines--;
      this.painting.pop();
    } else {
      this.painting[this.lines].deletePointFromLine();
    }

  }

  moveRight() {
      this.painting.forEach( line => {
          line.moveLineRight();
      });
  }

  moveLeft() {
      this.painting.forEach( line => {
          line.moveLineLeft();
      });
  }

  moveUp() {
      this.painting.forEach( line => {
          line.moveLineUp();
      });
  }

  moveDown() {
      this.painting.forEach( line => {
          line.moveLineDown();
      });
  }

  center(point) {
      point.x += this.canvas.width / 2;
      point.y += this.canvas.height / 2;
  }

  perspective(point, distance) {
      const fov = point.z + distance;
      point.x /= fov;
      point.y /= fov;
  }

}
