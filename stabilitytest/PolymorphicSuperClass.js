var PolymorphicSuperClass = function () {
var self = this;

this.child = nova_null;

this.PolymorphicSuperClass = function () {
self.this();
};

this.destroy = function () {
};

this.giveBirth = function () {
self.child = new PolymorphicSubClass();
};

this.toString = function () {
return "super class";
};

this.this = function () {
};

this.accessor_myProperty = function () {
return 1;
};

this.mutator_myProperty = function () {
};

this.super = function () {
};

this.myProperty = function () {
};


};


