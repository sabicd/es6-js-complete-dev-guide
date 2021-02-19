// Problem: create a subclass of Monster called Snake
// the Snake should have a bite method only argument to this is another Snake
// The instance of Snake that is passed should have their health deducted by 10
// Solution
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(SnakeToBite) {
    SnakeToBite.health = SnakeToBite.health - 10;
  }
}
