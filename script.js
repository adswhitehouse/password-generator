// Variables
let generate = document.querySelector(".jsGenerate");
let passwordInput = document.querySelector(".jsPasswordInput");
let copy = document.querySelector(".jsCopy");
let copied = document.querySelector(".jsCopied");

// Password length
let length = 12;

// Characters
let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+~|}{[]<>/-=";

// Create a random 12 digit password from allCharacters
function createPassword() {
  let password = "";
  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordInput.value = password;
}

// Run createPassword on generate button click
generate.addEventListener("click", () => {
  createPassword();
});

// Function that allows the input to be copied to clipboard
function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  passwordInput.setSelectionRange(0, 0);
  passwordInput.blur();
}

// When clicking copy icon, calls copyText and displays a message that times out after 1 second or restarts if clicked again
let isCopied = false;
copy.addEventListener("click", () => {
  copyPassword();
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
