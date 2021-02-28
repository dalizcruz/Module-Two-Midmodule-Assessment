const form = document.querySelector("#num-of-dice-form"); 
const dieResult = document.querySelector("#dice-para"); 

const rollDice = (event) => {
  event.preventDefault();
  dieResult.textContent = "";
  const numValue = document.querySelector("#num-input"); 
  for (let i = 0; i < numValue.value; i++) {
    const randomDice = Math.floor(Math.random() * dice.length);
    console.log(randomDice);
    dieResult.textContent += dice[randomDice];
  }


  
};

const savedHistory = (event) => {
   event.preventDefault();
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = dieResult.textContent;
  ul.appendChild(li);
};
form.addEventListener("submit", rollDice);
form.addEventListener("submit", savedHistory);
