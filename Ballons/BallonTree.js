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

function secondWalk(v, x, y) {
	if (v.parent==null) {
		v.x = x;
		v.y = y;
	} else {
		v.x = (v.r*Math.cos(v.a))+x;
		v.y = (v.r*Math.sin(v.a))+y;
	}
	
	for (var i=0;i<v.children.length;i++) {
		var u = v.children[i];
		secondWalk(u,v.x,v.y);
	}
}

function firstWalk(v,r) {
	if (v.height==0)
		v.c = r;
	else for (var i=0; i<v.children.length; i++) {
		var u = v.children[i];
		firstWalk(u,r);
		v.c = v.c + u.c;
	}
	v.r = v.c / Math.PI;
	var s = v.r;
	var a = 0;
	if (v.parent!=null&&v.index!=0) {
		var u = v.parent.children[v.index-1];
		s = s + u.r;
		a = u.a;
	}
	v.a = a + s / v.r;
}

function CircularTree(n,r,dx,dy) {
	firstWalk(n,r);
	secondWalk(n,dx,dy);
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
	draw.font = "10px Arial";
	var root = init();
	initialize(root);
	CircularTree(root,30,280,250);
	drawLinks(draw,root);
	drawNodes(draw,root,6,ROUND);
	drawLabels(draw,root,LEFT,10);
}

main();