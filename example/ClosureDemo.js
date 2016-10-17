var ClosureDemo = function () {
var self = this;


this.ClosureDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var demo;
demo = new ClosureDemo();
demo.callClosure(self.multiply);
demo.callClosure(self.pow);
Console.waitForEnter();
};

this.callClosure = function (closure) {
var value;
value = closure(5, 3);
Console.writeLine(new String("Closure returned ").concat(Int.toString(value)));
};

this.multiply = function (value1, value2) {
Console.writeLine(new String("multiply was called with ").concat(Int.toString(value1).concat(new String(" and ").concat(Int.toString(value2)))));
return value1 * value2;
};

this.pow = function (base, pow) {
var value;
var i;
Console.writeLine(new String("pow was called with ").concat(Int.toString(base).concat(new String(" and ").concat(Int.toString(pow)))));
value = base;
i = 0;
for (; i < (pow - 1); i++) {
value = value * base;
}
return value;
};

this.this = function () {
};

this.super = function () {
};


};


