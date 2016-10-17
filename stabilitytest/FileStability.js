var FileStability = function () {
var self = this;


this.FileStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
Console.writeLine("Checking File IO...");
self.inputString = "This is test input...";
self.lines = 100;
;
;
;
};

this.createFile = function (f) {
Console.write("Creating file... ");
if (!f.create()) {
self.program.fail();
}
Console.writeLine("OK");
};

this.writeToFile = function (f) {
var i;
Console.write(new String("Writing ").concat(Int.toString((self.lines)).concat(new String(" lines of data to file... "))));
i = 0;
for (; i < self.lines; i++) {
f.writeLine(self.inputString);
}
Console.writeLine("OK");
};

this.readFromFile = function (f) {
var times;
var line;
Console.write("Reading lines from file... ");
f.reopen();
times = 0;
line = f.readLine();
while (line != null){
if (!line.equals(self.inputString)) {
self.program.fail();
}
line = f.readLine();
times++;
}
if (times != self.lines) {
self.program.fail(new String("Failed; only read ").concat(Int.toString(times).concat(new String("/").concat(Byte.toString(100).concat(new String(" lines"))))));
}
Console.writeLine("OK");
};

this.deleteFile = function (f) {
Console.write("Deleting file... ");
if (!f.delete()) {
self.program.fail("Failed to delete file");
}
Console.writeLine("OK");
};

this.super = function () {
};


};


