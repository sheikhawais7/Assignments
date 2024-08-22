let users = [];
function addUser() {
    event.preventDefault();
    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let email = getFieldValue("email");
    let dob = getFieldValue("dob");
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    if(!firstName){
        let msg = "Please Enter your First Name";
        toatifyError(msg,'danger');
        return;
    }
    if(!lastName){
        let msg = "Please Enter your Last Name";
        toatifyError(msg,'danger');
        return;
    }
    if(!email){
        let msg = "Please Enter your Email";
        toatifyError(msg,'danger');
        return;
    }
    if(!dob){
        let msg = "Please Enter your Date of Birth";
        toatifyError(msg,'danger');
        return;
    }
    let msg = "A new user is successfully added";
    toatifyError(msg,'success');
    let user = {
        firstName,
        lastName,
        email,
        dob,
    }
    user.id = Math.random().toString(36).slice(2);
    user.dateCreated = new Date().getTime();
    user.status = "active";
    user.role = "student";
    users.push(user);
}   
function showTable() {
    showOutput("");
    if(!users.length) {
        let msg = "There is no single user avaliable";
        toatifyError(msg,'danger');
        return;
    }
    let tableStartingCode = '<div class="table-responsive"><table class="table">'
    let tableHeadCode = '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Date of Birth</th><th>Age</th></tr></thead>' 
    let tableEndingCode = '</table></div>'
    let tableBody = "";
    for(let i=0; i<users.length; i++){
        tableBody += '<tr><th>' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td></tr>'
    }
    let table = tableStartingCode + tableHeadCode + '<tbody>' + tableBody + '</tbody>' + tableEndingCode;
    showOutput(table);
}
function printUsers() {
    showOutput("");
    if(!users.length) {
        let msg = "There is no single user avaliable";
        toatifyError(msg,'danger');
        return;
    }
    for(let user of users){
        console.log(user);
    }
}
const toatifyError = (msg,color) => {
    let background = "";
    switch(color){
        case 'danger':
            background = "linear-gradient(to right, brown, red)";
            break; 
        default:
            background = "linear-gradient(to right, #00b09b, #96c93d)";  
    }
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: background,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
const getFieldValue = (fieldId) => {
    return document.getElementById(fieldId).value;
}
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}
const showOutput = (output) => {
    document.getElementById("output").innerHTML = '<h5>' + output + '</h5>';
}