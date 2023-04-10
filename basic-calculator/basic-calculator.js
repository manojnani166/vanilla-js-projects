const buttonEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i=0, l=buttonEl.length; i<l; i++) {
  buttonEl[i].addEventListener("click", ()=>{
    const buttonValue = buttonEl[i].textContent
    if(buttonValue === "c"){
      clearResult()
    } else if (buttonValue === "=") {
      calculateResult()
    } else {
      appendValue(buttonValue);
    }
  })
}

function clearResult() {
  inputFieldEl.value=" "

}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue) { 
  inputFieldEl.value += buttonValue;
}