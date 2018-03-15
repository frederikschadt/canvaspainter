export default class Rectangle {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(point) {
        if (
            point.x >= this.x
            && point.x <= this.x+this.width
            && point.y >= this.y
            && point.y <= this.y+this.height
        ) {
              return true;
        } else {
              return false;
          }
    }
}
