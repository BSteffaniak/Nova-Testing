var LambdaStability = function () {
var self = this;


this.LambdaStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var list;
var list2;
var mappedOutput;
var contextArg34;
var contextArg35;
var mappedExpected;
var linked;
var repeated;
var contextArg36;
var nova_local_0;
var item;
Console.write("Checking lambdas... ");
list = self.generated17();
list2 = self.generated18();
mappedOutput = list.filter(self.testLambda34).map(self.testLambda35).join(", ");
mappedExpected = "0: this?, 1: test?, 2: what shows up?";
if (!mappedOutput.equals(mappedExpected)) {
self.program.fail(new String("Failed first list map with 2 args. Expected '").concat(mappedExpected.concat(new String("' but received '").concat(mappedOutput.concat(new String("'"))))));
}
linked = new LinkedList();
linked.add("test").add("test2").add("test3");
if (!linked.reverse().join(", ").equals("test3, test2, test")) {
self.program.fail("Failed reverse linked list");
}
if (!linked.join(", ").equals("test, test2, test3")) {
self.program.fail("Failed forward linked list");
}
repeated = list.map(self.testLambda36);
nova_local_0 = (repeated).iterator();
while (nova_local_0.hasNext()) {
item = nova_local_0.next();
if (!item.equals("test")) {
self.program.fail("Map with no arguments failed");
}
}
Console.writeLine("OK");
};

this.generated17 = function () {
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

this.generated18 = function () {
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

this.testLambda34 = function (x, _2, _3) {
return x.count >= 4;
};

this.testLambda35 = function (x, i, _3) {
return concat(new String(": ").concat(x.concat(new String("?"))));
};

this.testLambda36 = function (_1, _2, _3) {
return "test";
};

this.super = function () {
};


};


