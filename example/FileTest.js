var FileTest = function () {
var self = this;


this.FileTest = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var f;
f = new File("C:/Users/Braden Steffaniak/test3.txt");
if (f.accessor_exists()) {
var data;
Console.writeLine("Your file exists!");
f.writeLine("Entering data..");
f.writeLine("asdfasdf thing.");
f.reopen();
data = f.readAllContents();
Console.writeLine(data);
} else {
Console.writeLine("Your file does not exist..");
}
f.close();
Console.writeLine("Press enter to exit...");
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


