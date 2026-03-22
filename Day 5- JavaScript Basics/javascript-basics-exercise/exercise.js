const counterText = document.querySelector('.js-counter-text');
const incrementBtn = document.querySelector('.js-increment-btn');
const decrementBtn = document.querySelector('.js-decrement-btn');

let count = 0;

incrementBtn.addEventListener('click', function(){
  count++;
  counterText.innerText = count;
});

decrementBtn.addEventListener('click', function(){

  if (count > 0) {
    count--;
    counterText.innerText = count;
  }
});

const ageInput = document.querySelector('.js-age-input');
const calculateBtn = document.querySelector('.js-calculate-btn');
const resultText = document.querySelector('.js-result');

calculateBtn.addEventListener('click', () => {
  const humanAge = Number(ageInput.value);

  if (humanAge > 0) {
    const dogAge = humanAge * 7;
    resultText.innerText = `Your age in dog years is: ${dogAge}`;
  } else {
    resultText.innerText = "Please enter a valid age!";
  }
});