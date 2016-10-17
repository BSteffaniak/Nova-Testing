var SvgFractal = function () {
var self = this;


this.SvgFractal = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var s;
var pi2;
var numVerts;
var coefficient;
var numPoints;
var timer;
var points;
var radius;
var offset;
var cx;
var cy;
var f;
var i;
var n;
var p;
s = new Svg();
pi2 = Math.PI * 2;
Console.write("Enter the number of vertices: ");
numVerts = Console.readInt();
Console.write("Enter the coefficient: ");
coefficient = Console.readDouble();
Console.write("Enter the number of points: ");
numPoints = Console.readInt();
timer = new Timer().start();
points = new DoubleArray(numVerts * 2);
radius = 450;
offset = pi2 / 12;
i = 0;
for (; i < numVerts; i++) {
var rad;
var nova_zero_check26;
nova_zero_check26 = (numVerts * 1.0);
if (nova_zero_check26 == 0) {
;
}
rad = pi2 * (i / nova_zero_check26) + offset;
points.set(i * 2 + 0, radius * Math.cos(rad) + radius + 10);
points.set(i * 2 + 1, radius * Math.sin(rad) + radius + 10);
}
n = 0;
for (; n < numVerts; n++) {
var x;
var y;
var circle2;
x = points.get(n * 2 + 0);
y = points.get(n * 2 + 1);
circle2 = new SvgCircle(x, y, 3);
s.root.children.addChild(circle2);
}
cx = radius + 10;
cy = radius + 10;
p = 0;
for (; p < numPoints; p++) {
var rand;
var x;
var y;
rand = Math.random(numVerts);
x = points.get(rand * 2 + 0);
y = points.get(rand * 2 + 1);
cx = cx - (cx - x) * coefficient;
cy = cy - (cy - y) * coefficient;
if (p > 15) {
var circle;
if ((p + 1) % 1000 == 0) {
Console.writeLine(new Int(p + 1));
}
circle = new SvgCircle(cx, cy, 1);
s.root.children.addChild(circle);
}
}
f = new File("C:/Users/Braden Steffaniak/svgoutput.html");
f.create();
f.clearContents();
s.generateHTMLOutput(f);
timer.stop();
Console.write(new String("Done generating ").concat(Long.toString(timer.accessor_duration())));
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


