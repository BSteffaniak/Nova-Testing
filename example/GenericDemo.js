var GenericDemo = function () {
var self = this;


this.GenericDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var strs;
strs = new Stack();
Console.writeLine("Pushing \"test\"");
strs.push("test");
Console.writeLine("Pushing \"ASDFASDF\"");
strs.push("ASDFASDF");
Console.writeLine("Pushing \"3!\"");
strs.push("3!");
Console.writeLine("Pushing \"34!!4334\"");
strs.push("34!!4334");
Console.writeLine("Pushing null");
strs.push(null);
while (!strs.accessor_empty()){
var popped;
popped = strs.pop();
if (popped != null) {
popped = new String("\"").concat(popped.concat(new String("\"")));
}
Console.writeLine(new String("Popping: ").concat(popped));
}
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


