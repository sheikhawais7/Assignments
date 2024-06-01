function round() {
    let num = document.getElementById("inputText").value;
    if(!num){
        alert("Please Enter A Floating Point Number")
        return;
    }
    let number = Math.round(num);
    document.getElementById("output").innerHTML = '<h1>' + number + '</h1>'
}
function ceil() {
    let num = document.getElementById("inputText").value;
    if(!num){
        alert("Please Enter A Floating Point Number")
        return;
    }
    let number = Math.ceil(num);
    document.getElementById("output").innerHTML = '<h1>' + number + '</h1>'
}
function floor() {
    let num = document.getElementById("inputText").value;
    if(!num){
        alert("Please Enter A Floating Point Number")
        return;
    }
    let number = Math.floor(num);
    document.getElementById("output").innerHTML = '<h1>' + number + '</h1>'
}
function randomNumber() {
    let number = Math.random()
    document.getElementById("output").innerHTML = '<h1>' + number + '</h1>'
}
function throwDice() {
    let randomNumber = Math.random()
    randomNumber = (randomNumber * 6) + 1;
    let number = Math.floor(randomNumber);
    document.getElementById("output").innerHTML = '<h1>' + number + '</h1><span>Generating a random number from 1 to 6.</span>'
} 
function strongPassword() {
    let strongPassword = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "!@#$%^&*_'"
    let allString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
    let limit = 16;
    for(let i=0; i < limit; i++){
        let randomNumber = Math.random();
        strongPassword += allString.charAt(Math.floor(randomNumber * allString.length));
    }
    document.getElementById("output").innerHTML = '<h6>' + strongPassword + '</h6>Generating a strong password &amp the length is <span style="color: red;"> '+ limit + ' .</span>'
}
function convertingString() {
    let num = document.getElementById("inputText").value;
    num = Number(num);
    // num = parseInt(num)
    // num = parseFloat(num)
    document.getElementById("output").innerHTML = '<h1>' + num + '</h1>'
}
function controllingLength() {
    let num = document.getElementById("inputText").value;
    if(!num){
        alert("Please Enter A Floating Point Number")
        return;
    }
    num = Number(num);
    num = num.toFixed(3);
    num = Number(num);
    document.getElementById("output").innerHTML = '<h1>' + num + '</h1>'
}
function calculateGST() {
    let cost = document.getElementById("inputText").value;
    if(!cost){
        alert("Please Enter Your Cost")
        return;
    } 
    cost = Number(cost);
    let tax = cost * (17 / 100);
    let totalCost = cost + tax;
    totalCost = Math.round(totalCost)
    // document.getElementById("
    document.getElementById("output").innerHTML = '<p>Your bill = ' + cost + '.</p><p>Tax 17% = <span class="text-danger">' + tax + '</span>.</p><p>Total amount including tax = <span class="text-success">' + totalCost + '</span>.</p>' 
}
function clearInput() {
    document.getElementById("inputText").value = "";
}
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}