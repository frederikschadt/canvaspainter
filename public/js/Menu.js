import Button from './Button.js';
import Point from './Point.js';
import Rectangle from './Rectangle.js';

export default class Menu extends Rectangle {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.buttons = [];
    }

    addButtons(width, height) {
      this.buttons.push(new Button(width-70, height-40, 70, 40,'PAINT',
                        new Point(width-55, height-18, 0) ));
      this.buttons.push(new Button(width-70, height-80, 70, 40,'DRAW',
                        new Point(width-55, height-58, 0) ));
      this.buttons.push(new Button(width-70, height-120, 70, 40,'RUBBER',
                        new Point(width-55, height-98, 0) ));
      this.buttons.push(new Button(width-70, height-160, 70, 40,'CLEAR',
                        new Point(width-55, height-138, 0) ));
      this.buttons.push(new Button(width-70, height-200, 70, 40,'UNDO',
                        new Point(width-55, height-178, 0) ));
      this.buttons.push(new Button(width-70, height-240, 70, 40,'NEW LINE',
                        new Point(width-55, height-218, 0) ));
      this.buttons.push(new Button(width-70, height-280, 35, 40, '<-',
                        new Point(width-55, height-258, 0) ));
      this.buttons.push(new Button(width-35, height-280, 35, 40, '->',
                        new Point(width-25, height-258, 0) ));
      this.buttons.push(new Button(width-70, height-320, 35, 40, 'UP',
                        new Point(width-57, height-298, 0) ));
      this.buttons.push(new Button(width-35, height-320, 35, 40, 'DOWN',
                        new Point(width-33, height-298, 0) ));
    }

    drawButtons(context) {
      this.buttons.forEach( button => {
          button.drawButton(context);
      });
    }

    clickButtons(point) {
      const [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10] = this.buttons;

      if (btn1.contains(point)) {
          return 'BUTTON_1_CLICKED';
      } else if (btn2.contains(point)) {
          return 'BUTTON_2_CLICKED';
      } else if (btn3.contains(point)) {
         return 'BUTTON_3_CLICKED';
      } else if (btn4.contains(point)) {
         return 'BUTTON_4_CLICKED';
      } else if (btn5.contains(point)) {
         return 'BUTTON_5_CLICKED';
      } else if (btn6.contains(point)) {
         return 'BUTTON_6_CLICKED';
      } else if (btn7.contains(point)) {
         return 'BUTTON_7_CLICKED';
      } else if (btn8.contains(point)) {
         return 'BUTTON_8_CLICKED';
      } else if (btn9.contains(point)) {
         return 'BUTTON_9_CLICKED';
      } else if (btn10.contains(point)) {
         return 'BUTTON_10_CLICKED';
      }
    }
}
