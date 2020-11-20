// function hey(word: string): string {
//   return `hey ${word}`;
// }

// // console.log(hey("duder"), activeDate({ startDate: new Date("2018-12-01"), endDate: new Date("2018-12-10")}));

// // class Animal {
// //   private sound :string;
// //   private move: string;

// //   constructor(g: string = 'kfgjn', o: string = 'dkfjgnd') {
// //     this.sound = g;
// //     this.move = o;
// //   }

// //   print() {
// //     console.log(`${this.sound} , ${this.move}`);
// //   }
// // }

// // ////

// // let asd  = new Animal();
// // let kot = new Animal('miał', 'szybko');
// // let pies = new Animal('bark', 'wolno');

// // asd.print()
// // kot.print();
// // pies.print();

// class Jajeczko {
//   constructor (theName: string, theSurname: string) {}

//   klops(a: number) {
//     console.log('a', a)
//   }
// }
// class Animal extends Jajeczko {
//   isBarking: boolean = true;

//   constructor (theName: string, theSurname: string) {
//     super(theName, theSurname);
//   }

//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//     console.log('isBarking', this.isBarking);
//   }
// }

// class Dog extends Animal {
//   // isBarking: boolean;
//   theSex: string;

//   constructor (theName: string, theSurname: string, theSex: string) {
//     super(theName, theSurname);
//     this.theSex = theSex;
//   }

//   bark() {
//     console.log("Woof! Woof!");
//     console.log(this.theSex);
//   }

//   move(m: number) {
//     super.move(m)
//     console.log('hahahha')
//   }
// }

// const dog = new Dog('Klops', 'jajecko', 'male');
// dog.bark();
// dog.move(10);
// dog.bark();
// dog.klops(9);
// dog.isBarking = false;

class Square {
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  getArea() {
    console.log(this.width * this.width)
  }

  getCircuit() {
    console.log(4 * this.width);
  }
}

let asdf = new Square(20);
asdf.getArea();
asdf.getCircuit()

class Rectangle {
  width1: number;
  width2: number;

  constructor(width1: number, width2: number) {
    this.width1 = width1;
    this.width2 = width2;
  }

  getArea() {
     console.log(this.width1 * this.width2)
  }
  getCircuit() {
    console.log(2 * this.width1 + 2 * this.width2);

  }
}

let qwerty = new Rectangle(10, 20);
qwerty.getArea()
qwerty.getCircuit()


class Triangle {
  private a?: number;
  private h?: number;

  set setA(value: number) {
    this.a = value;
  }

  set setH(value: number) {
    this.h = value;
  }

  get getA() {
    return this.a;
  }

  constructor(a?: number, h?: number) {
    this.a = a;
    this.h = h;
  }

  getArea() {
    if(!this.a && !this.h) {
      console.error('ERROR');

      return
    }

    console.log(0.5 * this.a * this.h);

  }
  
  getCircuit() {
    return console.log(3 * this.a);
  }
}

let triangle = new Triangle()
// triangle.setA = 10;
// triangle.setH = 20;
console.log('----------------------------');

triangle.getArea();
// triangle.getCircuit()

class Shape  {
   name: string;
}

class Romb implements Shape {
  getArea() {
    console.log('asd')
  }

  getCircuit() {
 return {}
  }
}

let cos = new Shape();

cos.name = 'asd';

