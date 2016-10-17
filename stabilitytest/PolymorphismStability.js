var PolymorphismStability = function () {
var self = this;


this.PolymorphismStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
Console.writeLine("Checking Polymorphism stability...");
self.testCalls();
self.testClosure();
self.testProperty();
};

this.testCalls = function () {
var obj1;
var obj2;
Console.write("Checking polymorphic method calls... ");
obj1 = new PolymorphicSuperClass();
obj2 = new PolymorphicSubClass();
if (!self.testSubCall(obj2)) {
self.program.fail("Did not call sub class method");
}
Console.writeLine("OK");
};

this.testSubCall = function (obj) {
return equals("sub class");
};

this.testClosure = function () {
var obj;
var child;
Console.write("Checking polymorphic closure method calls... ");
obj = new PolymorphicSubClass();
if (!self.callPolymorphicClosure(obj.toString)) {
self.program.fail("Did not call sub class method as closure");
}
obj.giveBirth();
child = obj.child.toString().concat(new String("!"));
if (!self.callPolymorphicClosure(obj.child.toString)) {
self.program.fail("Did not call sub class method as closure");
}
Console.writeLine("OK");
};

this.callPolymorphicClosure = function (closure) {
return equals("sub class");
};

this.testProperty = function () {
var obj1;
var obj2;
Console.write("Checking polymorphic properties... ");
obj1 = new PolymorphicSuperClass();
obj2 = new PolymorphicSubClass();
if (obj1.myProperty() != 1) {
self.program.fail("Did not call super polymorphic property accessor correctly");
}
if (obj2.myProperty() != 2) {
self.program.fail("Did not call sub polymorphic property accessor correctly");
}
Console.writeLine("OK");
};

this.super = function () {
};


};


