// ---------ALERT NAME----------
document.getElementById("name").onclick=function(){
    alert("Muhammad Awais Mehboob")
    let statement = "alert('Muhammad Awais Mehboob')"
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML= "";
}
//  ----------ALERT Number---------
document.getElementById("number").onclick=function(){
    alert("123")
    let statement = "alert('123')"
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML='';
}
// -----------VARIABLE NAMES----------
document.getElementById("variable").onclick=function(){
    document.getElementById("statement").innerHTML='';
    let statement= "<ul><li>A variable name must start with a letter or the underscore character.</li><li>A variable name cannot start with a number.</li><li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li><li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li></ul>"
    document.getElementById("output").innerHTML= statement;
}
//  ------------CAMELCASE------------
document.getElementById("camelCase").onclick=function(){
    document.getElementById("statement").innerHTML='';
    let statement = "<h3>Example</h3><ul><li>user</li><li>userResponse</li><li>userResponseAge</li><li>userResponseAgeTime</li></ul>"
    document.getElementById("output").innerHTML= statement;
}
//   ----------SUM------------
document.getElementById("sum").onclick=function(){
    document.getElementById("statement").innerHTML= '';
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>sum = num1 + num2" 
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML='<p class= "text-center">'+ sum +'</p>'
}
//  ---------SUBTRACT---------
document.getElementById("subtract").onclick=function(){
    document.getElementById("statement").innerHTML= '';
    let num1 = 10;
    let num2 = 5;
    let sum = num1 - num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>sum = num1 - num2" 
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML='<p class= "text-center">'+ sum +'</p>'
}
// // ----------MULTIPLY---------
document.getElementById("multiply").onclick=function(){
    document.getElementById("statement").innerHTML= '';
    let num1 = 10;
    let num2 = 5;
    let sum = num1 * num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>sum = num1 * num2" 
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML='<p class= "text-center">'+ sum +'</p>'
}
// // -----------DIVIDE------------
document.getElementById("divide").onclick=function(){
    document.getElementById("statement").innerHTML= '';
    let num1 = 10;
    let num2 = 5;
    let sum = num1 / num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>sum = num1 / num2" 
    document.getElementById("statement").innerHTML= statement;
    document.getElementById("output").innerHTML='<p class= "text-center">'+ sum +'</p>'
}
// // ----------CALCULATE----------
document.getElementById("calculate").onclick=function(){
    document.getElementById("statement").innerHTML='';
    let statement = "36/6*3+2**4-(3+5)"
    document.getElementById("statement").innerHTML= statement;
    let answer =  36/6*3+2**4-(3+5);
    document.getElementById("output").innerHTML='<p class= "text-center">'+ answer +'</p>'
}
// ----------CLEAR STATEMENT------
document.getElementById("clear-statement").onclick=function(){
    document.getElementById("statement").innerHTML= '';
}
// ---------CLEAR OUTPUT--------
document.getElementById("clear-output").onclick=function(){
    document.getElementById("output").innerHTML= '';
}
