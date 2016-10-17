var ClassWithProperties = function () {
var self = this;

this.privateProp1 = 0;
this.privateProp2 = 0;

this.ClassWithProperties = function () {
self.this();
};

this.destroy = function () {
};

this.this = function () {
};

this.accessor_prop1 = function () {
return self.privateProp1;
};

this.mutator_prop1 = function (value) {
self.privateProp1 = value;
return value;
};

this.accessor_prop2 = function () {
return self.privateProp2;
};

this.mutator_prop2 = function (value) {
self.privateProp2 = value;
return value;
};

this.super = function () {
};


};


