var animalPopulation = 0;

function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bees("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");

    var lunchtimeAnimals = [tigger, pooh, rarity, gemma, stinger];

    var zobot = new Zookeeper("Zobot");
    zobot.feedAnimals(lunchtimeAnimals, "meat");
    zobot.feedAnimals(lunchtimeAnimals, "bacon");
    zobot.feedAnimals(lunchtimeAnimals, "marshmallows");


    console.log(Animal.getPopulation() + " animals");
}


class Zookeeper {

    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + animalPopulation + " total animals.");
        for (var i =0; i < animals.length; i++){
            animals[i].eat(food);
        }
        /* not really sure if you meant you wanted the animal population
            displayed in the console alone or if you wanted it in the sentence above.
            If you want it to appear alone then all you have to do is
            uncomment the command below (it works).
         */

        //console.log(animalPopulation);
    }
}

class Animal {

    constructor (name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    static getPopulation(){
        return animalPopulation;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        // complete your eat function here!
        console.log(this.name + " eats " + food);
        this.favoriteFood == food ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}


class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

}

class Unicorn extends Animal{
    constructor (name){
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (this.favoriteFood == food){
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        } else {
            this.sleep();
        }
    }
}

class Giraffe extends Animal {
    constructor (name){
        super (name, "leaves");
    }

    eat(food){
        if (this.favoriteFood == food){
            console.log("YUM!!! " + this.name + " wants more leaves");
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
            console.log(this.name + " eats leaves");
        }
    }
}

class Bees extends Animal {
    constructor (name){
        super (name, "pollen");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }
    eat(food){
        if (food == this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more pollen");
            this.sleep();

        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
            console.log(this.name + " eats pollen");
        }
    }
}


class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }

    eat(food) {
        // complete your eat function here!
        console.log(this.name + " eats " + food);
        this.favoriteFood == food ? console.log("YUM!!! " + this.name + " wants more " + food) :
            this.sleep();

    }
}

// eat("Tigger", "meat");
// eat("Tigger", "bacon");
//
// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);
// p1.sayName();
// p2.sayHistory();
// class Polygon {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //method #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //method #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }


// function eat(name, food){
//     console.log(name + " eats " + food);
//  /*   if (favoriteFood == food){
//         console.log("YUM!!!" + name + " wants more " + food);
//     } else {
