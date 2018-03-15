import Point from './Point.js';
import Rectangle from './Rectangle.js';

export default class Button extends Rectangle {
  constructor(x, y, width, height, text, textpoint) {
    super(x, y, width, height);
    this.text = text;
    this.textpoint = textpoint;
  }

  drawButton(context) {
    context.fillStyle = '#000000';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.font = '10px serif';
    context.lineWidth = 0.8;
    context.strokeStyle = '#ffffff';
    context.strokeText(this.text, this.textpoint.x, this.textpoint.y);
  }
}
