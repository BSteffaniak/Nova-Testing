var PolymorphismDemo = function () {
var self = this;


this.PolymorphismDemo = function () {
self.this();
};

this.destroy = function () {
};

this.main = function (args) {
var animals;
var dog;
var spider;
var description;
animals = new Array(2);
dog = new Dog();
spider = new Spider();
animals.set(0, dog);
animals.set(1, spider);
description = self.getDescriptionOfAnimalWithNumberOfLegs(animals, 8);
Console.writeLine(new String("Searched for animal with 8 legs and found: ").concat((description).concat(new String(""))));
Console.waitForEnter();
};

this.getDescriptionOfAnimalWithNumberOfLegs = function (animals, numLegs) {
var i;
i = 0;
for (; i < 2; i++) {
if (animals.data.getNumLegs() == numLegs) {
return getDescription();
}
}
return concat(Int.toString((numLegs)).concat(new String(" legs")));
};

this.this = function () {
};

this.super = function () {
};


};


