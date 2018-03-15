export default class Lines {

    constructor() {
        this.line = [];
        this.length = 0;
    }

    addPointToLine(point) {
        this.line.push(point);
        this.length++;
    }

    mergeLines(line) {
        let newLine = [];
        newLine = this.line.concat(line);
        return newLine;
    }

    existsPointInOtherLine(point) {
        for(let i = 0; i < this.length;i++) {
            if(this.line[i].isEqual(point)) {
                return true;
            }
        }
        return false;
    }

    deletePointFromLine() {
        if (this.length > 0) {
            this.line.pop();
            this.length--;
        }
    }

    drawLines(context) {
        if (this.length >= 2) {
            this.setLineProperties(context, "orange", 3, "round");
            context.beginPath();
            context.moveTo(this.line[0].x, this.line[0].y);
            for(let i = 0; i < this.length-1; i++) {
                context.lineTo(this.line[i+1].x, this.line[i+1].y);
            }
            context.stroke();
        }
        this.line.forEach( point => {
            point.drawPoint(context);
        });
    }

    setLineProperties(context, color, lineWidth, lineForm) {
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.lineJoin = lineForm;
    }

    moveLineRight() {
        this.line.forEach( point => {
            point.movePointRight();
        });
    }

    moveLineLeft() {
        this.line.forEach( point => {
            point.movePointLeft();
        });
    }

    moveLineUp() {
        this.line.forEach( point => {
            point.movePointUp();
        });
    }

    moveLineDown() {
        this.line.forEach( point => {
            point.movePointDown();
        });
    }
}
