
var input = document.querySelector("#input");
var addBtn = document.querySelector("#btn");
var list = document.querySelector("#list");

addBtn.addEventListener('click',function(){
  var p = document.createElement("p");
  p.innerText = input.value;
  list.appendChild(p);
  input.value = "";

  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    list.removeChild(p);
  });
})

const d = new Date();

document.getElementById("date").innerHTML = d.toDateString();