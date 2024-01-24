var summation = function (num) {
  let summ = 0;
  for (let i = 0; i <= num; i++) {
    summ += i;
  }

  return summ;
};

console.log(summation(8));

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

console.log(paperwork(-3, 5));

function countPositivesSumNegatives(input) {
  let count = 0,
    summ = 0;

  if (input != null && !!input.length) {
    input.forEach((e) => {
      if (e > 0) {
        count++;
      } else if (e < 0) {
        summ += e;
      }
    });
    return [count, summ];
  } else {
    return [];
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

function reverseWords(str) {
  arr = str.split(" ");
  arrNew = [];

  arr.forEach((e) => {
    newStr = e.split("").reverse().join("");
    arrNew.push(newStr);
  });

  console.log(arrNew.join(" "));
}

reverseWords("This is an example!");

const rps = (p1, p2) => {
  if (p1 == p2) {
    console.log("Draw!");
  } else if (p1 == "scissors") {
    if (p2 == "paper") {
      console.log("Player 1 won!");
    } else {
      console.log("Player 2 won!");
    }
  } else if (p1 == "paper") {
    if (p2 == "scissors") {
      console.log("Player 2 won!");
    } else {
      console.log("Player 1 won!");
    }
  } else {
    if (p2 == "scissors") {
      console.log("Player 1 won!");
    } else {
      console.log("Player 2 won!");
    }
  }
};

rps("scissors", "paper");
rps("scissors", "rock");
rps("paper", "rock");
rps("paper", "paper");

function positiveSum(arr) {
  let summ = 0;
  arr.forEach((e) => {
    if (e > 0) summ += e;
  });
  return summ;
}

console.log(positiveSum([1, -4, 7, 12]));

function makeUpperCase(str) {
  return str.toUpperCase();
}
