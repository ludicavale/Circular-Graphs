TOP = 101;
BOTTOM = 102;
RIGHT = 103;
LEFT = 104;
CENTER = 105;
BOX = 200;
ROUND = 201;

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

function secondWalk(v, dx, dy) {
	v.x = (v.r*Math.cos(v.a))+dx;
	v.y = (v.r*Math.sin(v.a))+dy;
	
	for (var i=0;i<v.children.length;i++) {
		var u = v.children[i];
		secondWalk(u,dx,dy);
	}
}

function bisectorAngle(r,e) {
	return 2 * Math.acos(r/(r+e));
}

function firstWalk(v,r,a1,a2,e) {
	var a=0;
	var s=0;
	v.r = r;
	v.a = (a1+a2)/2;
    var ba = bisectorAngle(r,e);
	if ((ba < a2 - a1) && (r!=0)) {
		s = ba/v.leaves;
		a = (a1+a2-ba)/2;
	} else {
		s = (a2 - a1)/v.leaves;
		a = a1;
	}
	for (var i=0;i<v.children.length;i++) {
		var u = v.children[i];
		firstWalk(u,r+e,a,a+s*u.leaves,e);
		a = a + s * u.leaves;
	}
}
function drawRadialAxis(node,draw,x,y,r) {
	var levels = node.height;
	var roffset = (r/2/levels);
	draw.lineWidth = 0.5;
	for (var i =0; i<levels; i++) {
		draw.beginPath();
		draw.arc(x,y,roffset*i,0,2*Math.PI);
		draw.stroke();
	}
}
// Eades - 1992
function RadialTree(n) {
	firstWalk(n,0,0,2*Math.PI,50);
	secondWalk(n,300,200);
}

function main() {
	display = document.getElementById('canvas'); 
	draw = display.getContext('2d');
	draw.strokeStyle = 'black';
	draw.fillStyle = 'black';
	draw.font = "12px Arial";
	var root = init();
	RadialTree(root);
	drawLinks(draw,root);
	
	drawRadialAxis(root,draw,300,200,400); // xpos,ypos,width
	drawNodes(draw,root,6,ROUND);
	drawLabels(draw,root,LEFT,10);
}

main();