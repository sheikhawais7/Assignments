let equation= "";
function conditionValue(value){
    document.getElementById("output").innerHTML += value;
    equation += value ;
}
function resultValue(){
    const answer = eval(equation)
    document.getElementById("output").innerHTML= answer;
}
function clearValue(){
    document.getElementById("output").innerHTML= "";
    equation = "";
}