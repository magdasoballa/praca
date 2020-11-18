
function hey(word: string): string {
  return `hey ${word}`;
}

// console.log(hey("duder"), activeDate({ startDate: new Date("2018-12-01"), endDate: new Date("2018-12-10")}));

class Animal {
  private sound :string;
  private move: string;

  constructor(sound = 'asd', move = 'asd') {
    this.sound = sound;
    this.move = move;
  }

  print() {
    console.log(`${this.sound} , ${this.move}`);
  }  
}

let asd  = new Animal();
let kot = new Animal('miał', 'szybko');
let pies = new Animal('bark', 'wolno');


asd.print()
kot.print();
pies.print();