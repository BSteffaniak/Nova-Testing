var StabilityTest = function () {
var self = this;


this.StabilityTest = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.main = function (args) {
var n;
var test;
var timer;
n = null;
test = new StabilityTest(n);
timer = new Timer().start();
test.test();
timer.stop();
Console.writeLine(new String("Took ").concat(Long.toString(timer.accessor_duration()).concat(new String("ms"))));
Console.waitForEnter();
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
;
;
;
};

this.fail = function () {
self.fail("Failed");
};

this.fail = function (message) {
;
};

this.super = function () {
};


};


