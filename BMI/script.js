

var add = document.querySelector("#calculate");

add.addEventListener("click", function() {
let h = parseFloat(document.querySelector("#height").value);
console.log(h);

let w = parseFloat(document.querySelector("#weight").value);
console.log(w);

  let bmi = w/(h*h);
  document.querySelector("#result").innerHTML = bmi;
  console.log(typeof(bmi));
  if(isNaN(bmi)){

    bmi=0;


    document.querySelector("#result").innerHTML = "Please enter valid values";
  }


});