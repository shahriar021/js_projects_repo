let t = document.querySelector("#task");
let t2 = document.querySelector("#task2");
let add = document.querySelector("#add");
let para = document.querySelector("#para");

add.addEventListener('click',function(){
    var sum += parseInt(t.value)+parseInt(t2.value);
    para.innerHTML = parseInt(sum);

})

document.querySelector.