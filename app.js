min = document.getElementById("min")
max = document.getElementById("max")
reset = document.getElementById("reset")
gen = document.getElementById("letsgo")
result = document.getElementById("result")

gen.addEventListener('click', function(){
    if ((parseInt(min.value, 10)) >= (parseInt(max.value, 10))){
        result.style.color="red"
        result.innerHTML="You sef 🌚<br>Minimum value cannot be greater than or equals to Maximum value! 😒";
    }
    else{
    let z = Math.floor(Math.random() * ((parseInt(max.value, 10)) - (parseInt(min.value, 10)) + (parseInt(min.value, 10))));
    result.style.color="green"
    result.innerHTML=z;
    reset.style.display="inline"
    }
        });
        

reset.addEventListener('click', function(){
    min.value = ""
    max.value = ""
    result.innerHTML = ""
    reset.style.display="none"
})