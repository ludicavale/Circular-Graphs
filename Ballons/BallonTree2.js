
function circCoord(radians, radius) {
    var result = {};
    result.x = radius * Math.cos(radians);
    result.y = radius * Math.sin(radians);
    return result;
}

function drawing(node, draw) {
    var n = node.children.length;
    drawNodes(draw,node);
    draw.fillText(node.label, node.x + 6, node.y); 
    drawBallon(node, draw);
    for (var i = 0; i < n; i++) {
        child = node.children[i];
        draw.beginPath();
        draw.moveTo(node.x, node.y);
        draw.lineTo(child.x, child.y);
        draw.stroke();
        drawing(child, draw);
    }
}
function drawBallon(node,draw) {
    var n = node.children.length;
    console.log(node.label +" --- "+n);
    var n_child = [];
    var maxLengthChild = 0;
    var sumLengthChild = 0;
    for (var i = 0; i < n; i++) {
        child = node.children[i];
        n_child[i] = child;
    }
    for (var j = 0; j < n_child.length; j++) {
        if(n_child[j].children.length > maxLengthChild){
            maxLengthChild = n_child[j].children.length;
        }
        sumLengthChild =+ n_child[j].children.length;
    }
    console.log("Max cant of childs:"+maxLengthChild);
    console.log("Sum cant of childs:"+sumLengthChild);
    draw.beginPath();
    console.log(((n*maxLengthChild*10)-maxLengthChild));
    draw.arc(node.x, node.y,((n*maxLengthChild*22/sumLengthChild)),0,2*Math.PI);
    draw.stroke();
}

function drawNodes(draw,node) {
    var n = node.children.length;
    draw.beginPath();
    draw.arc(node.x,node.y,6,0,2 * Math.PI,false);
    draw.fill();
    for (var i =0; i<n; i++) {
        child = node.children[i];
        drawNodes(draw,child);
    }
}



function ballonTreeLayout(node, x, y, w) { 
    node.x = x;
    node.y = y;
    var n = node.children.length;
    var interval;
    if(n > 2){
        interval = Math.PI * 2 / n;
    }else{
        interval = (Math.PI * 2 / n)+1;
    }
    for (var i = 0; i < n; i++) {  // Se recorren los hijos del nodo padre 
        var child = node.children[i];
        var coord = circCoord(interval * i, w);
        ballonTreeLayout(child, x + coord.x, y + coord.y, w / 3);  // de forma recursiva se llena los valores de los hijos
    }
}

function main() {
    display = document.getElementById('canvas2');
    draw = display.getContext('2d');
    draw.font = "12px Arial";
    root = init();
    ballonTreeLayout(root, display.width/2,display.height/2, 150);
//    ballonTreeLayout(root, 310, 230, 150); // x,y,w,h
    draw.strokeStyle = 'black';
    //drawRadialAxis(root,draw,310,230,460); // xpos,ypos,width
    draw.fillStyle = 'black';
    draw.lineWidth = 1;
    drawing(root, draw);
}

main();
/*
function drawLinks(draw,node) {
    var n = node.children.length;
    for (var i =0; i<n; i++) {
        child = node.children[i];
        draw.beginPath();
        draw.moveTo(node.x,node.y);
        draw.lineTo(child.x,child.y);
        draw.stroke();
        drawLinks(draw,child);
    }
}

function drawNodes(draw,node,size,symbol) {
    var n = node.children.length;
    draw.beginPath();
    if (symbol==ROUND)
        draw.arc(node.x,node.y,size,0,2 * Math.PI,false);
    else
        draw.rect(node.x-size/2,node.y-size/2,size,size);
    draw.fill();
    for (var i =0; i<n; i++) {
        child = node.children[i];
        drawNodes(draw,child,size,symbol);
    }
}

function drawLabels(draw,node,position,offset,degrees) {
    var dx=0,dy=0;
    draw.textAlign="center";
    var n = node.children.length;
    if (position==TOP) {
        dy = -offset;
     } else if (position == BOTTOM) {
        dy = offset;
     } else if (position == RIGHT) {
        dx = -offset;
        draw.textAlign="right";
    } else if (position == LEFT) {
        dx = offset;
        draw.textAlign="left";
    }
    var h = draw.measureText('M').width - 2;
    draw.save();
    draw.translate(node.x,node.y);
    if (degrees) draw.rotate(degrees*Math.PI/180);
    draw.fillText(node.label,dx,dy+h/2);
    draw.restore();
    for (var i =0; i<n; i++) {
        child = node.children[i];
        drawLabels(draw,child,position,offset,degrees);
    }
}

m = 6
d = 1

function secondWalk(n, x, y, c, begin) {
    n.x = x;
    n.y = y;
    var d1 = c * n.d;
    var angle = begin + Math.PI;
    var freespace = n.f / (n.children.length + 1);
    var previous = 0;
    for (var i=0; i<n.children.length; i++) {
        var k = n.children[i];
        var a1 = c * k.a;
        var r1 = d * Math.tan(a1)/(1-Math.tan(a1));
        angle = angle + previous + k.a + freespace;
        k.x = (c*r1+d1)*Math.cos(angle);
        k.y = (c*r1+d1)*Math.sin(angle);
        previous = k.a;
        secondWalk(k, k.x+n.x, k.y+n.y, c*(r1/k.r), angle);
    }
}

function setRadius(n) {
    n.r = Math.max(n.d,m) + (2 * n.d);
}

function halfsectorSum(n) {
    var sum = 0;
    for (var i=0; i<n.children.length; i++) {
        var k = n.children[i];
        k.a = Math.atan(k.r/(d+k.r));
        sum = sum + k.a;
    }
    return sum;
}

function adjustChildren(n) {
    var s = halfsectorSum(n);
    if (s> Math.PI) {
        n.c = Math.PI / s;
        n.f = 0;
    } else {
        n.c = 1;
        n.f = Math.PI - s;
    }
}

function firstWalk(n) {
    n.d = 0;
    for (var i=0; i<n.children.length; i++) {
        var k = n.children[i];
        firstWalk(k);
        n.d = Math.max(n.d,k.r);
    }
    adjustChildren(n);
    setRadius(n);
}

// G. Melanc con, 1998
function circularDisplay(n,dx,dy) {
    firstWalk(n);
    secondWalk(n,dx,dy,1,0);
}

function initialize(node) {
    node.c = 0;
    node.r = 0;
    node.a = 0;
    for (var i=0; i<node.children.length; i++) {
        var child = node.children[i];
        child.index = i;
        child.parent = node;
        initialize(child);
    }
}

function main() {
    display = document.getElementById('canvas2'); 
    draw = display.getContext('2d');
    draw.strokeStyle = 'black';
    draw.fillStyle = 'black';
    draw.font = "12px Arial";
    var root = init();
    initialize(root);
    circularDisplay(root,280,250);
    drawLinks(draw,root);
    drawNodes(draw,root,2,ROUND);
//  drawLabels(draw,root,LEFT,10);
}

main();*/