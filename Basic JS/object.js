const player = {
  name: "jumin",
  points: 10,
  fat: false,
};

console.log(player);
console.log(player.name);
player.points = 15;
console.log(player);
player.lastName = "Kim";
console.log(player);

const calculator = {
  add: function (a, b) {
    alert(a + b);
  },
  minus: function (a, b) {
    alert(a - b);
  },
  divide: function (a, b) {
    alert(a / b);
  },
  multiply: function (a, b) {
    alert(a * b);
  },
};

calculator.add(3, 5);
calculator.minus(3, 5);
calculator.divide(3, 5);
calculator.multiply(3, 5);
calculator.add(3, 5);
