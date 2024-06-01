let cities = ["Faisalabad","Lahore","Islamabad","Karachi","Burawala","Sheikhupura","Kashmir"];
function simpleAlert() {
    document.getElementById("inputText").value = "";
    document.getElementById("output").innerHTML = ""; 
    alert("This is an Simple Alert")
}
function printName() {
    document.getElementById("inputText").value = "";
    document.getElementById("output").innerHTML = ""; 
    let myName = document.getElementById("inputText").value;
    if(!myName){
        alert("Please Enter Your Name");
        return;
    }
    document.getElementById("output").innerHTML = myName;
}
function printCities() {
    document.getElementById("inputText").value = "";
    document.getElementById("output").innerHTML = ""; 
    for(let i= 0;i<cities.length;i++){
        document.getElementById("output").innerHTML += 1 + i + ' ) ' + cities[i] + '<br>'
    }
}
function addCity() {
    document.getElementById("output").innerHTML = ""; 
    let city = document.getElementById("inputText").value;
    if(!city){
        alert("Please Enter Your City Name");
        return;
    }
    city = city.slice(0,1).toUpperCase() + city.slice(1)
    let index = 1;
    for(let i=0; i< cities.length;i++){
        if(cities[i] == city){
            document.getElementById("output").innerHTML = "This City is already in List."
            index = -1;
            break;
        }
    }
    if(index == 1){
        cities.push(city)
        document.getElementById("output").innerHTML = '<span style="color: green;">' + city + '</span>' + ' has been successfully added in List.'
    }
}
function generateTable() {
    document.getElementById("inputText").value = "";
    document.getElementById("output").innerHTML = ""; 
    let num = prompt("Enter the number for table");
    for(let i=1;i<=10;i++){
        document.getElementById("output").innerHTML += num + ' * ' + i + ' = ' + num*i +'<br>'
    }
}
function clearInput() {
    document.getElementById("inputText").value = ""; 
}
function clearOutput() {
    document.getElementById("output").innerHTML = ""; 
}