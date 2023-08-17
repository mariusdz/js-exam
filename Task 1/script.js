/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const userInput = document.querySelector("form")
const displayPounds = document.querySelector("#pounds");
const displayGrams = document.querySelector("#grams");
const displayOunces = document.querySelector("#ounces");
const userSubmit = document.querySelector("#submit-btn");


function weightConverter(userInput) {
    displayPounds.innerHTML = (userInput * 2.2046).toFixed(2);
    displayGrams.innerHTML = userInput * 1000;
    displayOunces.innerHTML = (userInput * 35.274).toFixed(2);
    }


userSubmit.addEventListener("click", weightConverter(3));


