"use strict";
class Animal {
    ageofAnimal() {
        return 5;
    }
}
class Cow extends Animal {
    soundofAnimal() {
        return "cow";
    }
}
let c1 = new Cow();
console.log(c1.ageofAnimal());
