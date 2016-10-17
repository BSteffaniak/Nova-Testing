var ExceptionStability = function () {
var self = this;


this.ExceptionStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var worked;
Console.writeLine("Checking Exception handling...");
worked = false;
;
;
;
if (!worked) {
self.program.fail("Failed; uncaught Exception");
}
};

this.testException = function () {
var worked;
worked = false;
;
;
;
if (!worked) {
self.program.fail("Failed; uncaught StabilityTestException");
}
};

this.super = function () {
};


};


