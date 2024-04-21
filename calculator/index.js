
const display = document.getElementById("display")

function Appender(input){
    display.value+=input
}

function Result(){
    display.value=eval(display.value)
}

function Clear(){
    display.value=""
}
