
export function paint(context, point) {
    context.beginPath();
    context.arc(point.x, point.y, 5, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = 'blue';
    context.fill();
}

export function eraser(context, point) {
    context.beginPath();
    context.arc(point.x, point.y, 5, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = 'white';
    context.fill();
}
