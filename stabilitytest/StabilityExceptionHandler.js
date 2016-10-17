var StabilityExceptionHandler = function () {
var self = this;

this.program = nova_null;

this.StabilityExceptionHandler = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self = program;
};

this.uncaughtException = function (thread, exception) {
self.program.fail();
};

this.super = function () {
};


};


