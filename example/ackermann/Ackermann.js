var Ackermann = function () {
var self = this;


this.Ackermann = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
Console.writeLine(new String("Ackermann: ").concat(Int.toString(self.run(4, 1))));
Console.waitForEnter();
};

this.run = function (m, n) {
if (m == 0) {
return n + 1;
} else {
if (n == 0) {
return self.run(m - 1, 1);
} else {
return self.run(m - 1, self.run(m, n - 1));
}
}
return 0;
};

this.run2 = function (m, n) {
if (m == 0) {
return n + 1;
} else {
if (n == 0) {
return self.run(m - 1, 1);
} else {
return self.run(m - 1, self.run(m, n - 1));
}
}
return 0;
};

this.this = function () {
};

this.super = function () {
};


};


