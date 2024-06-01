let originalText ="I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."
let cities = ["Faisalabad","Lahore","Islamabad","Karachi","Burawala","Sheikhupura","Kashmir"]
function lowercase() {
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
}
function uppercase() { 
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}
function capitalize() {
    let capitalizeText = '<span style="text-transform : capitalize;">' + originalText + '</span>'
    document.getElementById("output").innerHTML = capitalizeText;
}
function formate() {
    let text = document.getElementById("inputText").value;
    if(!text){
        alert("Please Enter Your Text")
        return;
    }
    text = text.toLowerCase()
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text;
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
            document.getElementById("output").innerHTML = '<span style="color : red; font-size: 20px">' + city + '</span>'  + 'is already in List.'
            index = -1;
            break;
        }
    }
    if(index == 1){
        cities.push(city)
        document.getElementById("output").innerHTML = '<span style="color: green; font-size: 20px"">' + city + '</span>' + ' has been successfully added in List.'
    }
}
function checkCity() {
    document.getElementById("output").innerHTML = ""; 
    let city = document.getElementById("inputText").value;
    if(!city){
        alert("Please Enter Your City Name");
        return;
    }
    city = city.slice(0,1).toUpperCase() + city.slice(1).toLowerCase()           
    let index = 1;
    for(let i=0; i< cities.length;i++){
        if(cities[i] == city){
            document.getElementById("output").innerHTML = "This City is already in List."
            index = -1;
            break;
        }
    }
    if(index == 1){
        document.getElementById("output").innerHTML = 'This City Is Not Add In List.'
    }
}
function findWord() {
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputText").value;
    if(!word){
        alert("Enter Your Word");
        return;
    }
    word = word.toLowerCase()
    let findIndex = newOriginalText.indexOf(word)
    if(findIndex !== -1){
        let html = 'Your word ' + '<span style="color: green; font-size: 20px">' + word + '</span>' + ' is found at index : ' + findIndex +'.'
        document.getElementById("output").innerHTML = html;
    }
    else{
        let html = 'Your word ' + '<span style="color: red; font-size: 20px">' + word + '</span>' + ' is not exist in text.'
        document.getElementById("output").innerHTML = html;
    }
}
function replaceWord() {
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputText").value;
    if(!word){
        alert("Enter Your Word");
        return;
    }
    word = word.toLowerCase()
    word = new RegExp(word, 'g')
    let replaceWith = prompt("Enter The Word To Replace");
    replaceWith = replaceWith.toLowerCase()
    let replace = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replace;
}






























function clearInput() {
    document.getElementById("inputText").value = "";
}
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}