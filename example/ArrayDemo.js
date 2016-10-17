var ArrayDemo = function () {
var self = this;


this.ArrayDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var c;
c = 'y';
while (c == 'y' || c == 'Y'){
var list;
var animal;
var i;
var i2;
var i3;
list = new Array();
list.add(new Dog());
list.add(new Dog());
list.add(new Spider());
list.add(new Dog());
list.add(new Animal());
list.add(new Spider());
i = 0;
for (; i < list.count; i++) {
Console.writeLine(new String("Contains: ").concat(list.get(i).toString()));
}
animal = list.remove(2);
Console.writeLine(new String("--------- Removed: ").concat(animal.toString().concat(new String(" ----------"))));
i2 = 0;
for (; i2 < list.count; i2++) {
Console.writeLine(new String("Contains: ").concat(list.get(i2).toString()));
}
list.add(1, new Spider());
Console.writeLine("--------- Added a new spider at index 1 ----------");
i3 = 0;
for (; i3 < list.count; i3++) {
Console.writeLine(new String("Contains: ").concat(list.get(i3).toString()));
}
Console.write("Run again? (Y/N)");
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


