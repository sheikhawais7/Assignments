// ---------btn-1----------
document.getElementById("btn-1").onclick = function () {
    let statement1 = '<h3>Example</h3>Hello +""+ World'
    let statement2 = "Hello World."
    document.getElementById("statement").innerHTML = statement1;
    document.getElementById("output").innerHTML = statement2;
}
//  ----------btn-2---------
document.getElementById("btn-2").onclick = function () {
    let statement = prompt("Enter your Name")
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = statement;
}
// -----------btn-3----------
document.getElementById("btn-3").onclick = function () {
    let statement1 = "<h3>Example</h3><ul><li>x!==8</li><li>x<8</li><li>x>=8</li></ul>"
    document.getElementById("statement").innerHTML = statement1;
    document.getElementById("output").innerHTML = "";
}
//  ------------btn-4------------
document.getElementById("btn-4").onclick = function () {
    document.getElementById("statement").innerHTML = '';
    let marks = prompt("Enter your marks")
    let message = "";
    if (marks >= 90) {
        message = "you got A+"
    } else if (marks >= 80) {
        message = "you got A"
    } else if (marks >= 70) {
        message = "you got B"
    } else {
        message = "you are failed"
    }
    document.getElementById("output").innerHTML = message;
}
//   ---------btn-5-----------
document.getElementById("btn-5").onclick = function () {
    document.getElementById("statement").innerHTML = '';
    let agenumber = prompt("Enter your Ag. No")
    let message = "";
    if (agenumber == 9864) {
        message = "you cgpa is 4"
    } else if (agenumber == 9561) {
        message = "you cgpa is 3.7"
    } else if (agenumber == 9811) {
        message = "you cgpa is 3.9"
    } else {
        message = "you cgpa is 2.0"
    }
    document.getElementById("output").innerHTML = message;
}
//  ---------btn-6---------
document.getElementById("btn-6").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    let age = prompt("Enter your age")
    let msg = "";
    if (age >= 18) {
        let name = prompt("Enter your name")
        let province = prompt("Enter your province")
        if (province == "punjab") {
            msg = "You are able to cast the vote"
        }
        else {
            msg = "You are not from Punjab"
        }
    }
    else {
        msg = "You are not able to cast the vote"
    }
    document.getElementById("output").innerHTML = msg;
}
// // ----------btn-7---------
document.getElementById("btn-7").onclick = function () {
    let email = prompt("Enter your Email")
    document.getElementById("statement").innerHTML = email;
    let password = prompt("Enter your Password")
    document.getElementById("output").innerHTML = password;
}
// // -----------btn-8------------
document.getElementById("btn-8").onclick = function () {
    document.getElementById("statement").innerHTML = '';
    let x = prompt("Enter your Number from 1 - 2")
    let message = "";
    if (x == 1) {
        message = "you number is 1"
    } else if (x == 2) {
        message = "you number is 2"
    } else {
        message = "you number is 3 to infinity"
    }
    document.getElementById("output").innerHTML = message;
}
// ----------CLEAR STATEMENT------
document.getElementById("clear-statement").onclick = function () {
    document.getElementById("statement").innerHTML = '';
}
// ---------CLEAR OUTPUT--------
document.getElementById("clear-output").onclick = function () {
    document.getElementById("output").innerHTML = '';
}
