var Lab = function () {
var self = this;


this.Lab = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var tree;
var num1;
var num2;
var str;
var str2;
var list;
var list2;
var contextArg26;
var multi;
var contextArg27;
var contextArg28;
var contextArg29;
var contextArg30;
var contextArg31;
var contextArg32;
var linked;
var x;
var sq;
tree = new BinaryTree(self.generated11());
Console.writeLine(new String("Preorder: ").concat((tree.preorder().join(new String(", "))).concat(new String(""))));
Console.writeLine(new String("Inorder: ").concat((tree.inorder().join(new String(", "))).concat(new String(""))));
Console.writeLine(new String("Postorder: ").concat((tree.postorder().join(new String(", "))).concat(new String(""))));
Console.writeLine(new String("Levelorder: ").concat((tree.levelorder().join(new String(", "))).concat(new String(""))));
num1 = 4;
num2 = num1 = 7;
Console.writeLine(new String("My nums: ").concat(Int.toString((num1)).concat(new String(", ").concat(Int.toString((num2)).concat(new String(" hey: ").concat((tree.inorder()).toString().concat(new String("!"))))))));
Console.writeLine(new String("Result from ternary: ").concat(Int.toString((num1)).concat(new String(" ").concat(().concat(new String(" 3"))))));
str = "this isnt null";
str2 = null;
Console.writeLine(new String("Normal: ").concat((new String("hello").surroundWith(new String("hey "))).concat(new String(""))));
Console.writeLine(new String("Symmetrical: ").concat((new String("hello").surroundWith(new String("hey "), true)).concat(new String(""))));
Console.writeLine(new String("Elvis not null: ").concat(().concat(new String(""))));
Console.writeLine(new String("Elvis null: ").concat(().toString().concat(new String(""))));
"test";
Console.writeLine((new IntRange(2, 8)).toString().concat(new String(": ").concat(((new IntRange(2, 8)).join(new String(", "))).concat(new String("")))));
list = self.generated12();
list2 = self.generated13();
Async.execute(self.testLambda26);
Console.writeLine("Started async execution");
multi = new Array();
multi.add(self.generated14());
multi.add(self.generated15());
Console.writeLine(new String("Multi dimensional array: ").concat((multi).toString().concat(new String(""))));
Console.writeLine(Bool.toString(multi.get(0).get(0).chars.contains('z')).capitalize());
Console.writeLine(list.map(self.testLambda27).join(", "));
Console.writeLine(new String("Mapped: ").concat(list.filter(self.testLambda28).map(self.testLambda29).join(new String(", "))));
Console.writeLine(new String("Mapped backwards: ").concat(list.filter(self.testLambda30).map(self.testLambda31).reverse().join(new String(", "))));
Console.writeLine(new String("Mapped2: ").concat(list2.map(self.testLambda32).join(new String(", "))));
linked = new LinkedList();
linked.addAll(self.generated16());
Console.writeLine(new String("Linked list backwards: ").concat(linked.reverse().join(new String(", "))));
Console.writeLine(new String("Linked list forwards: ").concat(linked.join(new String(", "))));
x = "Hey its a string";
Console.writeLine(x);
self.takesString(x);
if (true) {
x = new Array();
x.add("hey");
x.add("its now an array");
}
Console.writeLine(x);
sq = new Square(4);
Console.writeLine(new Double(self.getArea(sq)));
Console.waitForEnter();
};

this.takesString = function (s) {
Console.writeLine(new String("Received ").concat(s));
};

this.doSomething = function (list) {
var contextArg33;
list.map(self.testLambda33).forEach(Console.writeLine);
};

this.getArea = function (p) {
return calculateArea();
};

this.this = function () {
};

this.generated11 = function () {
var temp;
temp = [];
temp = new String("F");
temp = new String("B");
temp = new String("A");
temp = new String("D");
temp = new String("C");
temp = new String("E");
temp = new String("G");
temp = new String("I");
temp = new String("H");
return new Array(temp, 9);
};

this.generated12 = function () {
var temp;
temp = [];
temp = new String("this");
temp = new String("is");
temp = new String("a");
temp = new String("test");
temp = new String("to");
temp = new String("see");
temp = new String("what shows up");
return new Array(temp, 7);
};

this.generated13 = function () {
var temp;
temp = [];
temp = 1;
temp = 2;
temp = 3;
temp = 4;
temp = 5;
temp = 6;
temp = 7;
return new IntArray(temp, 7);
};

this.testLambda26 = function () {
Console.writeLine("Wait a second!");
Thread.sleep(1000);
Console.writeLine("ok, now what");
};

this.generated14 = function () {
var temp;
temp = [];
temp = new String("This is a test");
temp = new String("index 2");
return new Array(temp, 2);
};

this.generated15 = function () {
var temp;
temp = [];
temp = new String("Second dimension yo");
temp = new String("waddup");
return new Array(temp, 2);
};

this.testLambda27 = function (x, _2, _3) {
var something;
something = 5 * x.count;
return concat(new String(" ").concat((x).concat(new String(""))));
};

this.testLambda28 = function (_1, _2, _3) {
return _1.count >= 4;
};

this.testLambda29 = function (_1, _2, _3) {
return concat(new String(": ").concat((_1).concat(new String("?"))));
};

this.testLambda30 = function (_1, _2, _3) {
return _1.count >= 4;
};

this.testLambda31 = function (_1, _2, _3) {
return concat(new String("?"));
};

this.testLambda32 = function (_1, _2, _3) {
return concat(new String("!"));
};

this.generated16 = function () {
var temp;
temp = [];
temp = new String("test");
temp = new String("test2");
temp = new String("test3");
return new Array(temp, 3);
};

this.testLambda33 = function (_1, _2, _3) {
return concat(new String("!!!"));
};

this.super = function () {
};


};


