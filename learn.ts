class Animal{
    public ageofAnimal():number{
        return 5;
    }
}

class Cow extends Animal{
    public soundofAnimal():string{
        return "cow";
    }
}
let c1 = new Cow();
console.log(c1.ageofAnimal()); 
console.log(c1.soundofAnimal()); 