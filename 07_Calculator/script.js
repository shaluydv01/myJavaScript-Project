//I want to update div data into input field(eventListener).
//I want to update all div data into input field(forEach).
//I want to update each div data into input field without removing the previous one(+=).
//Here don't include three buttons C, DEL, = .

const btns = document.querySelectorAll(".btn-qAll");
const Input = document.querySelector("input");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    Input.value += btn.textContent || btn.innerText;
  });
});

////I want to declare click of = as undefined when no operation is performed.

const btnEqual = document.querySelector(".btn-equal");

btnEqual.addEventListener("click", function () {
  Input.value = "undefined";
});

////I want to declare click of C as clear all data of input field.

const btnClear = document.querySelector(".btn-C");

btnClear.addEventListener('click', function(){
    Input.value = " ";
})

////I want to declare click of DEL as clear character of input field one by one.

const btnDelete = document.querySelector(".btn-DEL");

btnDelete.addEventListener('click', function(){
    // Remove the last character (or space) from the input field
    Input.value = Input.value.slice(0, -1);    //slice(start, end)
    console.log(Input.value);
});

////I want to perform various arithmetic operations and to get result by clicking on =.

const numberButton = document.querySelectorAll(".btn-num");


