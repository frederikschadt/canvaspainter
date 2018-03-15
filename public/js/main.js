import Point from './Point.js';
import Canvas from './Canvas.js';


const board = new Canvas();



board.canvas.addEventListener('mousemove', (event) => { board.painting.painterAndEraser(event, board.canvas, board.context);
board.menu.drawButtons(board.context);
 });

board.canvas.addEventListener('click', function(event) {
    let clickPoint = new Point(event.clientX, event.clientY, board.zoom);
    board.click(clickPoint);
});

document.addEventListener('keydown', (event) => { board.keyDown(event) });
