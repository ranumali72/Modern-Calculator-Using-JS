const display=document.getElementById("display");
function appendToDisplay(input){
     display.value+=input;
}
function clearDisplay(){
     display.value="";
}
function lastDelete(){
    display.substring(0, display.length -1);
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}