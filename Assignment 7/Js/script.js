let rightNowDate = new Date();
document.getElementById("statement").innerHTML = rightNowDate;
let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function today() {
    clearOutput();
    let date = new Date()
    let day = date.getDay()
    let nameOfToday = dayNames[day];
    showOutput(nameOfToday)
    tellTime();
}
function calculateDays() {
    clearOutput();
    let dob = inputValue();
    if(!dob){
        alert("Please Enter The Date Of Birth")
        return;
    }
    let today = new Date();
    let bornDay = new Date(dob);
    let todayTime = today.getTime();
    let bornDayTime = bornDay.getTime();
    let timeDiff = todayTime - bornDayTime;
    let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    daysDiff = Math.floor(daysDiff);
    let msg= '<span class="text-success">' + daysDiff + '</span> days have been passed since you born.';
    showOutput(msg);
    tellTime();

}
function nextBirthday() {
    clearOutput();
    let dob = inputValue();
    if(!dob){
        alert("Please Enter The Date Of Birth")
        return;
    }
    let today = new Date();
    let nextBirth = new Date(dob);
    let timeDiff = nextBirth.getTime() - today.getTime();
    let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    let msg= "Your next birthday is '" + Math.floor(daysDiff) + "' days away.";
    showOutput(msg);
    tellTime();

}
function greetUserBtn() {
    clearOutput();
    let userName = prompt("Enter Your Name");
    let now = new Date();
    let hour = now.getHours();
    let greetMsg = 'Good ';
    if(hour >=4 && hour < 12){
        greetMsg += 'Morning';
    } else if(hour >=12 && hour < 17){
        greetMsg += 'Afternoon';
    } else if(hour >=17 && hour < 20){
        greetMsg += 'Evening';
    } else {
        greetMsg += 'Night';
    }
    let msg = greetMsg + ' ' + userName;
    greetUser(msg);
    tellTime();
}
function time1() {
    tellTime();
}
function time2() {
    tellTime();
}
function time3() {
    tellTime();
}
function calculateTaxBtn() {
    clearOutput();
    let price = prompt("Enter Your Price");
    let taxRate = 18;
    let tax = calculateTax(price,taxRate);
    let msg = 'Your tax is <span class="text-success">' + tax + '</span>.'
    showOutput(msg);
}
function calculateTotalBtn() {
    clearOutput();
    let price = prompt("Enter Your Price");
    price = Number(price);
    let total = calculateTotal(price);
    let msg = 'Your total tax is <span class="text-success">' + total + '</span>.'
    showOutput(msg);
}
// ---------------------------------------------------------------------------------------------------------------------------------------
const calculateTotal = (price) => {
    if(price < 1000){
        taxRate = 8;
    } 
    else{
        taxRate = 18;
    }
    let tax = calculateTax(price,taxRate);
    let total = price + tax; 
    return total;
}
const calculateTax = (price,taxRate) => {
    return price * taxRate / 100;
}
const greetUser = (msg) => {
    document.getElementById("greetMessage").innerHTML = '<h6>' + msg + '</h6>';
}
const tellTime = () => {
    let time = new Date()
    let hour = time.getHours();
    let min = time.getMinutes();
    let second = time.getSeconds();
    let rightTime = hour + ':' + min + ':' + second;
    document.getElementById("output").innerHTML += '<br><br>You clicked the button @ ' + rightTime; 
}
const inputValue = () => {
    return document.getElementById("inputText").value;
}
const clearInput = () => {
    document.getElementById("inputText").value = "";
}
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}
const showOutput = (output) => {
    document.getElementById("output").innerHTML = '<h5>' + output + '</h5>';
}


