var hn=0;
var time=10;

function hidderNumber(){
    hn = Math.floor(Math.random() * 10);
    console.log(hn);
}

function timer(){

    var waste = setInterval(function(){
        if(time > 0){
             time--;
             document.querySelector("#forTimer").innerHTML = time;
        }
        else {
            clearInterval(waste);
            document.querySelector("#keyPad").innerHTML = `<h2>time up ${hn}</h2>`
        }
       
    },1000);
}

document.querySelector("#keyPad").addEventListener('click',function(key){
    var gn = key.target.textContent;
    console.log(gn);

    if(gn == hn){
        document.querySelector("#keyPad").innerHTML = "You Win";
    }
    else{
        document.querySelector("#keyPad").innerHTML = "Try Again";
    }
})

hidderNumber();
timer();