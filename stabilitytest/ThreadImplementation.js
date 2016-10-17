var ThreadImplementation = function () {
var self = this;

this.times = 0;
this.millis = 0;

this.ThreadImplementation = function (times, millis) {
self.this(times, millis);
};

this.destroy = function () {
};

this.this = function (times, millis) {
self = times;
self = millis;
};

this.run = function () {
var i;
i = 0;
for (; i < self.times; i++) {
Thread.sleep(self.millis);
}
};

this.super = function () {
};


};


