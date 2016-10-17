var ToStringStability = function () {
var self = this;


this.ToStringStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var d;
var b;
var i;
var l;
Console.write("Checking toString implementations... ");
d = 5.232;
self.checkToString("Double", new Double(d), "5.232");
b = 127;
self.checkToString("Byte", new Byte(b), "127");
i = 2147483647;
self.checkToString("Int", new Int(i), "2147483647");
l = -9223372036854775808;
self.checkToString("Long", new Long(l), "-9223372036854775808");
Console.writeLine("OK");
};

this.checkToString = function (type, number, expected) {
if (!number.toString().equals(expected)) {
self.program.fail(type.concat(new String(".toString failed. expected ").concat(expected.concat(new String(" but received ").concat(number.toString())))));
}
};

this.super = function () {
};


};


