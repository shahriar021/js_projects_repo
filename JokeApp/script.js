
let jokes = document.querySelector("#jokes");
let btn = document.querySelector("#btn1");

let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist,explicit";

  
let getJoke = () =>{
    fetch(url)
    .then(r =>r.json())
    .then(i =>{
        jokes.textContent=`${i.setup} ${i.delivery}`;
    });
}  

btn.addEventListener("click",getJoke);
getJoke();