import {getRealPoint} from './elementposition.js';
import Lines from './Lines.js';
import Button from './Button.js';
import Rectangle from './Rectangle.js';
import Point from './Point.js';
import Painting from './Painting.js';
import Menu from './Menu.js';

export default class Canvas {

    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.painting = new Painting();
        this.menu = new Menu(this.width-70, 0, 70, this.height);
        this.menu.addButtons(this.width, this.height);
        this.drawCanvas();
    }


    drawCanvas() {
        this.painting.drawPainting(this.context);
        this.menu.drawButtons(this.context);
    }

    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    clearCanvas() {
      this.clear();
      this.painting.reset();
      this.drawCanvas();
    }

    click(clickPoint) {
        let buttonclicked = false;
        getRealPoint(this.canvas, clickPoint);
        if(this.menu.contains(clickPoint)) {
            const button_clicked = this.menu.clickButtons(clickPoint);

            switch (button_clicked) {
              case 'BUTTON_1_CLICKED':
                this.painting.setStatus('PAINT');
                break;
              case 'BUTTON_2_CLICKED':
                this.painting.setStatus('DRAW');
                break;
              case 'BUTTON_3_CLICKED':
                this.painting.setStatus('ERASE');
                break;
              case 'BUTTON_4_CLICKED':
                this.clearCanvas();
                break;
              case 'BUTTON_5_CLICKED':
                this.clear();
                this.painting.removeLastAction();
                this.drawCanvas();
                break;
              case 'BUTTON_6_CLICKED':
                this.painting.addLine();
                break;
              case 'BUTTON_7_CLICKED':
                this.move("LEFT");
                break;
              case 'BUTTON_8_CLICKED':
                this.move("RIGHT");
                break;
              case 'BUTTON_9_CLICKED':
                this.move("UP");
                break;
              case 'BUTTON_10_CLICKED':
                this.move("DOWN");
                break;
              default:
                console.log("Kein Button geklickt!");
            }
        } else {
            if(this.painting.status === 'DRAW') {
              this.painting.draw(clickPoint, this.context);
            }
        }
    }

    keyDown(event) {
          [
              [68, 65, 87, 83, 89, 78, 82, 81, 77],
          ].forEach((key, index) => {
              if (event.keyCode === key[0]) {
                  this.move("RIGHT");
              } else if (event.keyCode === key[1]) {
                  this.move("LEFT");
              } else if (event.keyCode === key[2]) {
                  this.move("UP");
              } else if (event.keyCode === key[3]) {
                  this.move("DOWN");
              } else if(event.keyCode === key[4]) {
              /*this.clear();
              line.line.forEach(point => {
                  this.perspective(point, 3);
                  this.center(point, this.canvas);
              });
              line.drawLines(this.context);

              */
              } else if(event.keyCode === key[5]) {
                  this.addLine();
              } else if(event.keyCode === key[6]) {
                  this.clear();
                  this.removeLastAction();
                  this.drawCanvas();
              } else if(event.keyCode === key[7]) {
                  if(paintVar == false) {
                      paintVar = true;
                  } else if(paintVar == true) {
                      paintVar = false;
                  }
              }
          });
    }

    move(direction) {
      this.clear();
      switch (direction) {
        case "RIGHT":
          this.painting.moveRight();
          break;
        case "LEFT":
          this.painting.moveLeft();
          break;
        case "UP":
          this.painting.moveUp();
          break;
        case "DOWN":
          this.painting.moveDown();
          break;
        default:
          break;
      }
      this.drawCanvas();
    }
}
