var ClosureStability = function () {
var self = this;

this.number = 0;

this.ClosureStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.incrementNumber = function () {
self.number++;
};

this.test = function () {
self.TOLERANCE = 0.0000000001;
self.testClosures();
};

this.testClosures = function () {
Console.writeLine("Checking closures...");
self.testMathClosures();
self.testInstanceClosure();
};

this.testMathClosures = function () {
var a;
var b;
var value;
Console.write("Checking static math closures... ");
a = 5;
b = 3;
value = 0.5;
if (self.callClosure(self.multiply, a, b) != self.multiply(a, b)) {
self.program.fail("Failed to call multiply(Int, Int) closure");
}
if (self.callClosure(self.pow, a, b) != self.pow(a, b)) {
self.program.fail("Failed to call pow(Int, Int) closure");
}
if (self.mathClosure(Math.sin, value) - Math.sin(value) >= self.TOLERANCE) {
self.program.fail("Failed to call Math.sin(Double) closure");
}
if (self.mathClosure(Math.tan, value) - Math.tan(value) >= self.TOLERANCE) {
self.program.fail("Failed to call Math.tan(Double) closure");
}
Console.writeLine("OK");
};

this.testInstanceClosure = function () {
var c;
Console.write("Checking instance closures... ");
c = new ClosureStability(self.program);
self.instanceClosure(c.incrementNumber);
if (c.number == 0) {
self.program.fail("Failed to call incrementNumber() instance closure");
}
self.instanceClosure(new ClosureStability(self.program).incrementNumber);
self.instanceClosure(c.incrementNumber);
Console.writeLine("OK");
};

this.callClosure = function (closure, a, b) {
return closure(a, b);
};

this.mathClosure = function (closure, value) {
return closure(value);
};

this.instanceClosure = function (closure) {
closure();
};

this.multiply = function (value1, value2) {
return value1 * value2;
};

this.pow = function (base, pow) {
var value;
var i;
value = base;
i = 0;
for (; i < (pow - 1); i++) {
value = value * base;
}
return value;
};

this.super = function () {
};


};


