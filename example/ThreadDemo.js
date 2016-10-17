var ThreadDemo = function () {
var self = this;


this.ThreadDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var c;
c = 'y';
while (c == 'y' || c == 'Y'){
var thread;
var thread2;
var timer;
thread = new ThreadDemoImplementation(100, "Thread1");
thread2 = new ThreadDemoImplementation(100, "Thread2");
timer = new Timer().start();
thread.start();
thread2.start();
thread.join();
thread2.join();
timer.stop();
Console.writeLine(new String("Time taken: ").concat(Long.toString(timer.accessor_duration()).concat(new String("ms"))));
Console.write("Run again? (Y/N) ");
c = Console.readChar();
}
Console.writeLine("\nFinished");
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


