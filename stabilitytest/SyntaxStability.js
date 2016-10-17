var SyntaxStability = function () {
var self = this;


this.SyntaxStability = function (program) {
self.this(program);
};

this.destroy = function () {
};

this.this = function (program) {
self.this(program);
};

this.test = function () {
self.checkLoops();
self.checkUntil();
self.checkMatchStatements();
self.checkMultipleReturnValues();
self.checkIterators();
self.checkTernary();
self.checkElvis();
self.checkRepeat();
self.checkNamedArguments();
self.checkZipper();
};

this.checkMatchStatements = function () {
var num;
var worked;
var val;
var worked2;
var nova_local_0;
var nova_local_1;
Console.write("Checking simple match statement... ");
num = 3;
worked = false;
switch ((num))
{
case 1:
self.program.fail("Match accepted incorrect case");

break;
case 2:
self.program.fail("Match accepted incorrect case");

break;
case 3:
worked = true;

break;
case 4:
self.program.fail("Match accepted incorrect case");

break;
;
}
if (!worked) {
self.program.fail("FAIL");
}
Console.writeLine("OK");
Console.write("Checking simple match statement with indentation... ");
num = 3;
worked = false;
switch ((num))
{
case 1:
self.program.fail("Match accepted incorrect case");

break;
case 2:
self.program.fail("Match accepted incorrect case");

break;
case 3:
worked = true;

break;
case 4:
self.program.fail("Match accepted incorrect case");

break;
;
}
if (!worked) {
self.program.fail("FAIL");
}
Console.writeLine("OK");
Console.write("Checking simple match statement with scopes... ");
num = 3;
worked = false;
switch ((num))
{
case 1:
self.program.fail("Match accepted incorrect case");

break;
case 2:
self.program.fail("Match accepted incorrect case");

break;
case 3:
worked = true;

break;
case 4:
self.program.fail("Match accepted incorrect case");

break;
;
}
if (!worked) {
self.program.fail("FAIL");
}
Console.writeLine("OK");
Console.write("Checking match statement with variable case values... ");
val = 1;
num = 3;
worked = false;
if ((num) == (val++))
{
self.program.fail("Match accepted incorrect case");

}
else if ((num) == val++)
{
self.program.fail("Match accepted incorrect case");

}
else if ((num) == (val++))
{
worked = true;

}
else if ((num) == val++)
{
self.program.fail("Match accepted incorrect case");

}
;

if (!worked) {
self.program.fail("FAIL");
}
Console.writeLine("OK");
Console.write("Checking match statement with variable case values and fallthrough... ");
val = 1;
num = 3;
worked = false;
worked2 = false;
nova_local_1 = (num++);
do
{
if (nova_local_1 == val++)
{
self.program.fail("Match accepted incorrect case");

break;
}
else if (nova_local_1 == val++)
{
self.program.fail("Match accepted incorrect case");

break;
}
else if (nova_local_1 == val++)
{
worked = true;
;

}
if (nova_local_0 || nova_local_1 == val++)
{
worked2 = true;

break;
}
;

}
while (0);
if (!worked || !worked2) {
self.program.fail("FAIL");
}
Console.writeLine("OK");
};

this.checkLoops = function () {
self.checkWhileLoops();
self.checkForLoops();
};

this.checkWhileLoops = function () {
var num;
var num2;
var num3;
Console.write("Checking inline while loop... ");
num = 0;
num2 = 0;
num3 = 0;
while (num < 100){
num++;
}
while (num2 < 100){
num2++;
}
while (num3 < 100){
if (true) {
if (true) {
num3++;
}
}
}
if (num != 100 || num2 != 100 || num3 != 100) {
self.program.fail("Inline while loop failed.");
}
Console.writeLine("OK");
};

this.checkForLoops = function () {
var num;
var num2;
var num3;
var i;
var i2;
var i3;
Console.write("Checking inline for loop... ");
num = 0;
num2 = 0;
num3 = 0;
i = 0;
for (; i < 100; i++) {
num++;
}
i2 = 0;
for (; i2 < 100; i2++) {
num2++;
}
i3 = 0;
for (; i3 < 100; i3++) {
if (true) {
if (true) {
num3++;
}
}
}
if (num != 100 || num2 != 100 || num3 != 100) {
self.program.fail(new String("Inline for loop failed. Expected 100, 100, 100 received ").concat(Int.toString((num)).concat(new String(", ").concat(Int.toString((num2)).concat(new String(", ").concat(Int.toString((num3)).concat(new String(""))))))));
}
Console.writeLine("OK");
};

this.checkUntil = function () {
var obj;
Console.write("Checking until statement... ");
obj = null;
if (!(obj != null)) {
obj = self.test1();
if (!(obj != null)) {
obj = self.test2();
if (!(obj != null)) {
obj = self.test3();
if (!(obj != null)) {
self.program.fail("Failed to stop after correct condition");
}
}
}
}
if (obj == null) {
self.program.fail("Failed to reach correct condition");
}
Console.writeLine("OK");
};

this.test1 = function () {
return null;
};

this.test2 = function () {
return null;
};

this.test3 = function () {
return new Object();
};

this.checkMultipleReturnValues = function () {
var ret1;
var ret2;
var s1;
var s2;
Console.write("Checking methods with multiple return values... ");
ret1 = 1;
ret2 = 2;
ret1 = self.ret2(ret2);
if (ret1 != 5 || ret2 != 2) {
self.program.fail("Failed to pass over second return value");
}
ret1 = 1;
ret2 = 2;
ret1 = self.swap(ret1, ret2, ret2);
if (ret1 != 2 || ret2 != 1) {
self.program.fail("Failed to swap primitive values with multiple return values");
}
s1 = "hello";
s2 = "world";
s1 = self.swap2(s1, s2, s2);
if (!s1.equals("world") || !s2.equals("hello")) {
self.program.fail("Failed to swap String values with multiple return values");
}
Console.writeLine("OK");
};

this.ret2 = function () {
return 5;
};

this.swap = function (a, b) {
var nova_local_0;
nova_local_0 = b;
ret1 = a;
return nova_local_0;
};

this.swap2 = function (a, b) {
var nova_local_0;
nova_local_0 = b;
ret1 = a;
return nova_local_0;
};

this.filterFunc = function (i) {
return i.count >= 4;
};

this.foreachClosure = function (s) {
if (s.count < 4) {
;
}
};

this.checkIterators = function () {
var list;
var list2;
var iter;
var nova_local_0;
var string;
var n;
Console.write("Checking filter functionality... ");
list = self.generated19();
list2 = list.filter(self.filterFunc);
;
;
;
n = 0;
for (; n < list2.count; n++) {
if (list2.get(n).count < 4) {
self.program.fail("Failed to filter data correctly");
}
}
Console.writeLine("OK");
Console.write("Checking iterator functionality... ");
iter = list2.iterator();
while (iter.hasNext()){
if (iter.next().count < 4) {
self.program.fail("Failed to run iterator");
}
}
Console.writeLine("OK");
Console.write("Checking foreach loop functionality... ");
nova_local_0 = (list2).iterator();
while (nova_local_0.hasNext()) {
string = nova_local_0.next();
if (string.count < 4) {
self.program.fail("Failed to run foreach loop");
}
}
Console.writeLine("OK");
};

this.checkTernary = function () {
var first;
var second;
Console.write("Checking ternary functionality... ");
first = ;
if (!first) {
self.program.fail("Failed first ternary test");
}
second = ;
if (!second.equals("two")) {
self.program.fail("Failed second ternary test");
}
Console.writeLine("OK");
};

this.checkElvis = function () {
var str;
var str2;
var result1;
var result2;
Console.write("Checking elvis functionality... ");
str = "this isnt null";
str2 = null;
result1 = ;
if (result1.equals("wtf")) {
self.program.fail("Failed first elvis test");
}
result2 = ;
if (!result2.equals("this is null")) {
self.program.fail("Failed second elvis test");
}
Console.writeLine("OK");
};

this.trueValue = function () {
return true;
};

this.falseValue = function () {
return false;
};

this.checkRepeat = function () {
var i;
var repeatCounter3;
var times;
var repeatCounter4;
var repeatCounter5;
Console.write("Checking repeat functionality... ");
i = 0;
;
if (i != 101) {
self.program.fail("Vanilla repeat failed");
}
i = 0;
;
if (i != 101) {
self.program.fail("Repeat 101 times failed");
}
i = 0;
times = 101;
;
if (i != 101) {
self.program.fail(new String("Repeat times (").concat(Int.toString((times)).concat(new String(") failed"))));
}
i = 0;
;
if (i != 101) {
self.program.fail("Repeat fragment failed");
}
Console.writeLine("OK");
};

this.named = function (s, arg, jum, jdd, joe) {
jum = typeof jum == 'undefined' ? 4 : jum;
jdd = typeof jdd == 'undefined' ? 0 : jdd;
joe = typeof joe == 'undefined' ? 0 : joe;
return -1;
};

this.named = function (s, arg, num, add) {
num = typeof num == 'undefined' ? 4 : num;
add = typeof add == 'undefined' ? 0 : add;
return num * arg.count + add;
};

this.checkNamedArguments = function () {
var num;
Console.write("Checking named arguments... ");
num = self.named("", "yo", 4);
if (num != 8) {
self.program.fail(new String("Default argument failed. Expected 8, received ").concat(Int.toString((num)).concat(new String(""))));
}
num = self.named("", 2, "heyasdf", 5);
if (num != 37) {
self.program.fail(new String("Named arguments failed. Expeced 37, received ").concat(Int.toString((num)).concat(new String(" first"))));
}
num = self.named(2, 5, "heyasdf", "");
if (num != 37) {
self.program.fail(new String("Named arguments failed. Expeced 37, received ").concat(Int.toString((num)).concat(new String(" second"))));
}
Console.writeLine("OK");
};

this.checkZipper = function () {
var array1;
var array2;
var zipped;
var contextArg37;
Console.write("Checking zip function... ");
array1 = self.generated20();
array2 = self.generated21();
zipped = array1.zip(array2, self.testLambda37);
Console.write(new String(" Zipped: ").concat((zipped).toString().concat(new String(" "))));
Console.writeLine("OK");
};

this.generated19 = function () {
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

this.generated20 = function () {
var temp;
temp = [];
temp = new String("This");
temp = new String("is");
temp = new String("a");
temp = new String("test");
return new Array(temp, 4);
};

this.generated21 = function () {
var temp;
temp = [];
temp = new String("one");
temp = new String("two");
temp = new String("three");
temp = new String("four");
return new Array(temp, 4);
};

this.testLambda37 = function (x, y) {
return concat(new String(" ").concat((y).toString().concat(new String(""))));
};

this.super = function () {
};


};


