var TimeStability = function () {
var self = this;


this.TimeStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var timer;
Console.write("Checking Time.nova... ");
timer = new Timer();
timer.start();
Thread.sleep(100);
timer.stop();
if (timer.accessor_duration() >= 100 && timer.accessor_duration() < 130) {
Console.writeLine("OK");
} else {
self.program.fail(new String("Failed; expected 100ms, found ").concat(Long.toString(timer.accessor_duration()).concat(new String("ms"))));
}
};

this.super = function () {
};


};


