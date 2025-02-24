// Variable
let generate = document.querySelector(".jsGenerate");
let passwordInput = document.querySelector(".jsPasswordInput");
let copy = document.querySelector(".jsCopy");
let copied = document.querySelector(".jsCopied");

// Password characters array
let characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "_",
  "/",
  "(",
  ")",
  "]",
  "[",
  "#",
  "%",
  ".",
  ",",
  "'",
  "@",
];

// Generates random number the length or characters array and returns the index value of characters using that random number
let randomCharacter = () => {
  let randomNum = Math.floor(Math.random() * characters.length);
  let randomChar = characters[randomNum];
  return randomChar;
};

// Input gets a 12 digit random combination of characters
generate.addEventListener("click", () => {
  passwordInput.value = `${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}${randomCharacter()}`;
});

// Function that allows the input to be copied to clipboard
function copyText() {
  let range = document.createRange();
  range.selectNode(document.querySelector(".jsPasswordInput"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}

// When clicking copy icon, calls copyText and displays a message that times out after 1 second or restarts if clicked again
let isCopied = false;
copy.addEventListener("click", () => {
  copyText();
  copied.style.display = "inline";
  if (!isCopied) {
    isCopied = true;
    isCopied = setTimeout(() => {
      copied.style.display = "none";
      isCopied = false;
    }, 1000);
  } else {
    clearTimeout(isCopied);
    isCopied = setTimeout(() => {
      copied.style.display = "none";
      isCopied = false;
    }, 1000);
  }
});
