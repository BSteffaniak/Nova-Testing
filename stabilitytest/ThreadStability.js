var ThreadStability = function () {
var self = this;


this.ThreadStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var threads;
Console.writeLine("Checking Thread.nova with 20 Threads... ");
threads = new Array(20);
self.createThreads(threads, 20);
self.checkMemoryAccess();
self.joinThreads(threads, 20);
};

this.createThreads = function (threads, amount) {
var handler;
var i;
handler = new StabilityExceptionHandler(self.program);
i = 0;
for (; i < amount; i++) {
threads.set(i, new ThreadImplementation(10, 10));
threads.get(i).start();
}
};

this.checkMemoryAccess = function () {
var i;
Thread.sleep(30);
Console.write("Checking memory access with multi-threading... ");
i = 0;
for (; i < 1000; i++) {
var s;
s = Int.toString(i);
}
Console.writeLine("OK");
};

this.joinThreads = function (threads, amount) {
var i;
i = 0;
for (; i < amount; i++) {
threads.get(i).join();
}
};

this.super = function () {
};


};


