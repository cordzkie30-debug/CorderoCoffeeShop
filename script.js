document.addEventListener("DOMContentLoaded", function(){

const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', function(){
  navLinks.classList.toggle('show');
});

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const clearButton = document.getElementById('clearButton');

let counter = 0;
decrementButton.disabled = true;

function updateDisplay() {
  counterDisplay.textContent = counter;
}

incrementButton.addEventListener('click', function () {
  counter++;
  updateDisplay();
  decrementButton.disabled = false;
});

decrementButton.addEventListener('click', function () {
  if (counter > 0) counter--;
  updateDisplay();
  if (counter === 0) decrementButton.disabled = true;
});

clearButton.addEventListener('click', function () {
  if (confirm("Clear your order?")) {
    counter = 0;
    updateDisplay();
    decrementButton.disabled = true;
  }
});

const addCoffeeButtons = document.querySelectorAll('.addCoffee');

addCoffeeButtons.forEach(button => {
  button.addEventListener('click', function(){
    counter++;
    updateDisplay();
    decrementButton.disabled = false;
  });
});

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

function validateName(name) {
  if (!name) return 'Please enter your name.';
  if (!/^[a-zA-Z\s]+$/.test(name)) return 'Letters only.';
  if (name.length < 2) return 'Too short.';
  return '';
}

function greetUser() {
  const username = usernameInput.value.trim();
  const error = validateName(username);

  if (error) {
    greetingMessage.textContent = error;
    greetingMessage.className = 'error';
  } else {
    greetingMessage.textContent = `Welcome ${username}! Enjoy your coffee ☕`;
    greetingMessage.className = 'success';
  }
}

greetButton.addEventListener('click', greetUser);

});

const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {

  
  if (paragraphContainer.innerHTML !== "") return;

  const newParagraph = document.createElement('p');
  newParagraph.textContent = '🔥 Empresso - 20% OFF Today Only!';
  paragraphContainer.appendChild(newParagraph);

});

const openBtn = document.getElementById("openVideoBtn");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeVideoBtn");
const video = document.getElementById("coffeeVideo");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.src = "https://www.youtube.com/embed/-dQ75USmQZo?autoplay=1";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.src = "";
  }
});

