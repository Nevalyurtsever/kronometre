
var centiSecond = document.getElementById("centisecond");
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");


function countDown(){

    centiSecond.innerHTML= Number(centiSecond.innerHTML)+1;

    if(centiSecond.innerHTML > 99){

        centiSecond.innerHTML= 0;
        second.innerHTML= Number(second.innerHTML)+1;
    }

    if(second.innerHTML > 59){

        second.innerHTML=0;
        minute.innerHTML= Number(minute.innerHTML)+1;
    }

    if(minute.innerHTML> 59){

        minute.innerHTML= 0;
        hour.innerHTML= Number(hour.innerHTML)+1;
    }

centiSecond.innerHTML= centiSecond.innerHTML.toString().padStart(2,"0");
second.innerHTML = second.innerHTML.toString().padStart(2, "0");
minute.innerHTML = minute.innerHTML.toString().padStart(2, "0");
hour.innerHTML = hour.innerHTML.toString().padStart(2, "0");

   

}


//setInterval(countDown,10);


var timer;

function start(){

    timer = setInterval(countDown, 10);
    btnStart.innerHTML="Bitir";
}

function stop(){

    clearInterval(timer);
    btnStart.innerHTML = "Başlat";


}

function control(){

    if(btnStart.innerHTML == "Başlat"){
        start();
    }

    else{
        stop();
    }

}

document.body.addEventListener("keydown", (event)=>{

    if(event.code == "Space"){
        
        control();
     event.preventDefault();
    }
})

function reset(){

clearInterval(timer);
centiSecond.innerHTML = "00";
second.innerHTML = "00";
minute.innerHTML = "00";
hour.innerHTML = "00";
btnStart.innerHTML="Başlat";

}


document.body.addEventListener("keydown", (event)=>{
    if(event.code == "Delete"){
        reset();
    }
})