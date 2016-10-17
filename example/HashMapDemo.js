var HashMapDemo = function () {
var self = this;


this.HashMapDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var words;
var contextArg21;
var contextArg22;
var contextArg23;
var contextArg24;
var contextArg25;
words = new HashMap();
words.put("test", "is test");
words.put("test2", "is test2");
words.put("test3hey", "is test3hey");
words.put("test4hey", "is test4hey");
words.put("test5", "is test5");
words.forEach(self.testLambda21);
Console.writeLine(new String("\nRemoving test2: ").concat((words.remove(new String("test2"))).toString().concat(new String("\n"))));
words.forEach(self.testLambda22);
Console.writeLine(new String("\n").concat(words.filter(self.testLambda23).map(self.testLambda24).join(new String(", ")).concat(new String("\n"))));
words.forEach(self.testLambda25);
Console.waitForEnter();
};

this.this = function () {
};

this.testLambda21 = function (_1, _2, _3) {
Console.writeLine(new String("Contains: ").concat((_1).toString().concat(new String(""))));
};

this.testLambda22 = function (_1, _2, _3) {
Console.writeLine(new String("Contains: ").concat((_1).toString().concat(new String(""))));
};

this.testLambda23 = function (_1, _2, _3) {
return contains("hey");
};

this.testLambda24 = function (_1, _2, _3) {
return value;
};

this.testLambda25 = function (_1, _2, _3) {
Console.writeLine(new String("Contains: ").concat((_1).toString().concat(new String(""))));
};

this.super = function () {
};


};


