var AssignmentStability = function () {
var self = this;


this.AssignmentStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
var props;
var num;
var a;
var b;
var c;
Console.write("Checking embedded property assignments... ");
props = new ClassWithProperties();
num = props.mutator_prop1(props.mutator_prop2(1));
if (num != 1 || props.accessor_prop1() != 1 || props.accessor_prop2() != 1) {
self.program.fail(new String("Did not return mutated property value correctly. Expected 1, 1, 1 but received ").concat(Byte.toString(num).concat(new String(", ").concat(Int.toString(props.accessor_prop1()).concat(new String(", ").concat(Int.toString(props.accessor_prop2())))))));
}
Console.writeLine("OK");
Console.write("Checking embedded primitive assignments... ");
a = b = c = 1;
if (a != 1 || b != 1 || c != 1) {
self.program.fail(new String("Did not set assigned primitive values correctly. Expected 1, 1, 1 but received ").concat(Byte.toString(a).concat(new String(", ").concat(Byte.toString(b).concat(new String(", ").concat(Byte.toString(c)))))));
}
Console.writeLine("OK");
};

this.super = function () {
};


};


