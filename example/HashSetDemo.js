var HashSetDemo = function () {
var self = this;


this.HashSetDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var set;
var count;
var timer;
var stringTime;
var addTime;
var nova_zero_check2;
var nova_zero_check3;
var nova_zero_check4;
var nova_zero_check5;
var nova_zero_check6;
var nova_zero_check7;
var nova_zero_check8;
var nova_zero_check9;
var getTime;
var nova_zero_check10;
var nova_zero_check11;
var nova_zero_check12;
var nova_zero_check13;
var nova_zero_check14;
var nova_zero_check15;
var nova_zero_check16;
var nova_zero_check17;
var newStringTime;
var nova_zero_check18;
var nova_zero_check19;
var nova_zero_check20;
var nova_zero_check21;
var nova_zero_check22;
var nova_zero_check23;
var nova_zero_check24;
var nova_zero_check25;
var i;
var i;
var i;
var i;
set = new HashSet();
set.add("TEseting");
Console.writeLine(set);
Console.writeLine(new String("Contains TEset? ").concat(Bool.toString((set.contains(new String("TEset")))).concat(new String(""))));
Console.writeLine(new String("Contains TEseting? ").concat(Bool.toString((set.contains(new String("TEseting")))).concat(new String(""))));
Console.writeLine(set);
Console.writeLine("Benchmarking");
count = 50000;
timer = new Timer().start();
i = 0;
for (; i < count; i++) {
new String("my string").concat(Int.toString((i)).concat(new String("")));
}
stringTime = timer.stop().accessor_duration();
Console.writeLine(new String("Took ").concat(Long.toString((stringTime)).concat(new String("ms to create ").concat(Int.toString((count)).concat(new String(" strings"))))));
i = 0;
for (; i < 50000; i++) {
set.add(new String("my string").concat(Int.toString((i)).concat(new String(""))));
}
addTime = timer.stop().accessor_duration();
nova_zero_check2 = stringTime;
if (nova_zero_check2 == 0) {
;
}
nova_zero_check3 = nova_zero_check2;
if (nova_zero_check3 == 0) {
;
}
nova_zero_check4 = nova_zero_check3;
if (nova_zero_check4 == 0) {
;
}
nova_zero_check5 = nova_zero_check4;
if (nova_zero_check5 == 0) {
;
}
nova_zero_check6 = nova_zero_check5;
if (nova_zero_check6 == 0) {
;
}
nova_zero_check7 = nova_zero_check6;
if (nova_zero_check7 == 0) {
;
}
nova_zero_check8 = nova_zero_check7;
if (nova_zero_check8 == 0) {
;
}
nova_zero_check9 = nova_zero_check8;
if (nova_zero_check9 == 0) {
;
}
Console.writeLine(new String("Took ").concat(Long.toString((addTime)).concat(new String("ms to call add ").concat(Int.toString((count)).concat(new String(" times ").concat(Long.toString(((addTime - stringTime) * 100 / nova_zero_check9)).concat(new String("% overhead"))))))));
timer.start();
i = 0;
for (; i < count; i++) {
set.get(new String("my string").concat(Int.toString((i)).concat(new String(""))));
}
getTime = timer.stop().accessor_duration();
nova_zero_check10 = stringTime;
if (nova_zero_check10 == 0) {
;
}
nova_zero_check11 = nova_zero_check10;
if (nova_zero_check11 == 0) {
;
}
nova_zero_check12 = nova_zero_check11;
if (nova_zero_check12 == 0) {
;
}
nova_zero_check13 = nova_zero_check12;
if (nova_zero_check13 == 0) {
;
}
nova_zero_check14 = nova_zero_check13;
if (nova_zero_check14 == 0) {
;
}
nova_zero_check15 = nova_zero_check14;
if (nova_zero_check15 == 0) {
;
}
nova_zero_check16 = nova_zero_check15;
if (nova_zero_check16 == 0) {
;
}
nova_zero_check17 = nova_zero_check16;
if (nova_zero_check17 == 0) {
;
}
Console.writeLine(new String("Took ").concat(Long.toString((getTime)).concat(new String("ms to call get ").concat(Int.toString((count)).concat(new String(" times ").concat(Long.toString(((getTime - stringTime) * 100 / nova_zero_check17)).concat(new String("% overhead"))))))));
timer.start();
i = 0;
for (; i < count; i++) {
new String("my string").concat(Int.toString((i)).concat(new String("")));
}
newStringTime = timer.stop().accessor_duration();
nova_zero_check18 = stringTime;
if (nova_zero_check18 == 0) {
;
}
nova_zero_check19 = nova_zero_check18;
if (nova_zero_check19 == 0) {
;
}
nova_zero_check20 = nova_zero_check19;
if (nova_zero_check20 == 0) {
;
}
nova_zero_check21 = nova_zero_check20;
if (nova_zero_check21 == 0) {
;
}
nova_zero_check22 = nova_zero_check21;
if (nova_zero_check22 == 0) {
;
}
nova_zero_check23 = nova_zero_check22;
if (nova_zero_check23 == 0) {
;
}
nova_zero_check24 = nova_zero_check23;
if (nova_zero_check24 == 0) {
;
}
nova_zero_check25 = nova_zero_check24;
if (nova_zero_check25 == 0) {
;
}
Console.writeLine(new String("Took ").concat(Long.toString((newStringTime)).concat(new String("ms to create ").concat(Int.toString((count)).concat(new String(" strings ").concat(Long.toString(((newStringTime - stringTime) * 100 / nova_zero_check25)).concat(new String("% overhead"))))))));
Console.waitForEnter();
};

this.this = function () {
};

this.super = function () {
};


};


