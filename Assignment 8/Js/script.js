function btn1() {
    let mark = prompt("Enter Your Marks");
    let msg = 'Your grade is '
    if(mark >=48){
        msg += "'A'" 
    } else if(mark >=39){
        msg += "'B'"
    } else if(mark >=30){
        msg += "'C'"
    } else if(mark >=24){
        msg += "'D'"
    }  else{
        msg += "'F'"
    }
    showOutput(msg);
}
function btn2() {
    let now = new Date();
    let day = now.getDay();
    let msg = "Today is ";
    switch(day){
        case 0:
            msg += "'Sunday'";
            break;
        case 1:
            msg += "'Monday'";
            break;
        case 2:
            msg += "'Tuesday'";
            break;
        case 3:
            msg += "'Wednesday'";
            break;
        case 4:
            msg += "'Thursday'";
            break;
        case 5:
            msg += "'Friday'";
            break;
        case 6:
            msg += "'Saturday'";
            break;
        default :
            msg += 'Invalid number';
    }
    showOutput(msg)
}
function btn3() {
    do{
        var name = prompt("Enter Your Name");
        if(name)
            name = name.trim();
    }while(name === null || name == "");
    showOutput(name)
}
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}
const showOutput = (output) => {
    document.getElementById("output").innerHTML = '<h6>' + output + '</h6>';
}