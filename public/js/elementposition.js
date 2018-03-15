import Point from './Point.js';

export function getRealPoint(element, point) {
    let elementPoint= getElementPosition(element);
    point.x -= elementPoint.x;
    point.y -= elementPoint.y;
}

function getElementPosition(element) {
    let x = 0;
    let y = 0;

    while (element) {
        if (element.tagName == "BODY") {
            let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
            let yScroll = element.scrollTop || document.documentElement.scrollTop;

            x += (element.offsetLeft - xScroll + element.clientLeft);
            y += (element.offsetTop - yScroll + element.clientTop);
        } else {
            x += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            y += (element.offsetTop - element.scrollTop + element.clientTop);
        }
        element = element.offsetParent;
    }

    return new Point(x, y, 0);
}
