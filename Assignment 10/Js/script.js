let popup;
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
const whereWeAt = () => {
    let msg = window.location.href;
    showOutput(msg);
}
const goToGoogle = () => {
    window.location.href = "https://google.com"
}
const replaceURL = () => {
    window.location.replace("https://google.com");
}
const openPopup = () => {
    showOutput("");
    popup = window.open("","myWindow","width=500,heigth=500,left=200,top=100"); 
    popup.document.write("<h1>Hello Customer!</h1><h2>Your transaction has been completed!</h2>");
    setTimeout(() => {
        popup.window.close()
    },5000)
}
const fillContentInPopup = () => {
    popup.document.write("<h1>Hello Customer!</h1><h2>Your transaction has been completed!</h2>");
}
const assignURL = () => {
    popup.window.location.assign("https://google.com");
}
const closePopup = () => {
    popup.window.close();
}
const showOutput = (msg) => {
    document.getElementById("output").innerHTML = msg;
}
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}
