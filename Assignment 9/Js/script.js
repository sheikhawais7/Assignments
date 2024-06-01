function handleSubmit() {
    event.defaultPrevented();
    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let email = getFieldValue("email");
    let dob = getFieldValue("dob");
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
}
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































































































































const getFieldValue = (fieldId) => {
    return document.getElementById("fieldId").value;
}
const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}
const showOutput = (output) => {
    document.getElementById("output").innerHTML = '<h5>' + output + '</h5>';
}