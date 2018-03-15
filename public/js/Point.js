export default class Point {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    drawPoint(context) {
        context.beginPath();
        context.arc(this.x, this.y, 3, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = 'black';
        context.fill();
    }

    isEqual(point) {
        if (this.x == point.x && this.y == point.y && this.z == point.z) {
            return true;
        } else {
            return false;
        }
    }

    movePointRight() {
        this.x++;
    }

    movePointLeft() {
        this.x--;
    }

    movePointUp() {
        this.y--;
    }

    movePointDown() {
        this.y++;
    }
}
