var upper = false;
var lower = false;
var num = false;
var sym = false;
var count = 0;
var length = 4;

var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ":",
  ";",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "?",
  "/",
];

const upperfun = () => {
  if (upper) {
    upper = false;
    count -= 1;
  } else {
    upper = true;
    count += 1;
  }
  count > 0
    ? (document.getElementById("poor").style.background = "red")
    : (document.getElementById("poor").style.background = "black");
  count > 1
    ? (document.getElementById("weak").style.background = "yellow")
    : (document.getElementById("weak").style.background = "black");
  count > 2
    ? (document.getElementById("good").style.background = "orange")
    : (document.getElementById("good").style.background = "black");
  count > 3
    ? (document.getElementById("excellent").style.background = "green")
    : (document.getElementById("excellent").style.background = "black");
};

const lowerfun = () => {
  if (lower) {
    lower = false;
    count -= 1;
  } else {
    lower = true;
    count += 1;
  }
  count > 0
    ? (document.getElementById("poor").style.background = "red")
    : (document.getElementById("poor").style.background = "black");
  count > 1
    ? (document.getElementById("weak").style.background = "yellow")
    : (document.getElementById("weak").style.background = "black");
  count > 2
    ? (document.getElementById("good").style.background = "orange")
    : (document.getElementById("good").style.background = "black");
  count > 3
    ? (document.getElementById("excellent").style.background = "green")
    : (document.getElementById("excellent").style.background = "black");

  return lower;
};

const numfun = () => {
  if (num) {
    num = false;
    count -= 1;
  } else {
    num = true;
    count += 1;
  }
  count > 0
    ? (document.getElementById("poor").style.background = "red")
    : (document.getElementById("poor").style.background = "black");
  count > 1
    ? (document.getElementById("weak").style.background = "yellow")
    : (document.getElementById("weak").style.background = "black");
  count > 2
    ? (document.getElementById("good").style.background = "orange")
    : (document.getElementById("good").style.background = "black");
  count > 3
    ? (document.getElementById("excellent").style.background = "green")
    : (document.getElementById("excellent").style.background = "black");
};

const symfun = () => {
  if (sym) {
    sym = false;
    count -= 1;
  } else {
    sym = true;
    count += 1;
  }
  count > 0
    ? (document.getElementById("poor").style.background = "red")
    : (document.getElementById("poor").style.background = "black");
  count > 1
    ? (document.getElementById("weak").style.background = "yellow")
    : (document.getElementById("weak").style.background = "black");
  count > 2
    ? (document.getElementById("good").style.background = "orange")
    : (document.getElementById("good").style.background = "black");
  count > 3
    ? (document.getElementById("excellent").style.background = "green")
    : (document.getElementById("excellent").style.background = "black");
};

const raise = (value) => {
  document.getElementById("lenValue").innerHTML = value;
  length = value;
};

const generate = () => {
  var pass = "";
  var current = [];
  if (length > 3) {
    if (upper || lower || sym || num) {
      for (var i = 0; i < length; i++) {
        if (upper) {
          current.push(upperChar[Math.floor(Math.random() * upperChar.length)]);
        }
        if (lower) {
          current.push(lowerChar[Math.floor(Math.random() * lowerChar.length)]);
        }
        if (num) {
          current.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
        if (sym) {
          current.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        pass += current[Math.floor(Math.random() * current.length)];
      }
      document.getElementById("password").innerHTML = pass;
      console.log(upper, lower, num, sym);
      console.log(current);
    } else {
      alert("Select any params");
    }
  } else {
    alert("Length should be greater than 0");
  }
};
