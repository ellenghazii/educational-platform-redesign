
const inputs = document.querySelectorAll(".otp-box input");

inputs.forEach((input,index)=>{

    input.addEventListener("input",()=>{

        if(input.value.length===1 && index < inputs.length-1){

            inputs[index+1].focus();

        }

    });

});



// تایمر

let time = 81;

const countdown = document.getElementById("countdown");

const timer = setInterval(()=>{

let min = Math.floor(time/60);

let sec = time%60;

countdown.innerHTML =

`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

time--;

if(time < 0){

clearInterval(timer);

countdown.innerHTML="00:00";

}

},1000);
