// ----- JAVASCRIPT STRING
const createString = () => { 
    let fullName = "Muhammad Awais"
    localStorage.setItem("fullName",fullName) 
}
const readString = () => {  
    let fullName = localStorage.getItem("fullName")
    document.getElementById("fullName").innerHTML = fullName;
}
const updateString = () => {  
    let fullName = "Sheikh Awais"
    localStorage.setItem("fullName",fullName)
}
const deleteString = () => {  
    localStorage.removeItem("fullName")
}
// ----- JAVASCRIPT ARRAY
const createArray = () => {  
    let users = [{ fullName: "Muhammad Awais"},{ fullName: "Abdul-Wahab" }]
    localStorage.setItem("users",JSON.stringify(users))
}
const readArray = () => {  
    let users = JSON.parse(localStorage.getItem("users"))
    console.log("users =>",users)
}
const updateArray = () => {  
    let newUser = {fullName: "Ammar"}
    let users = JSON.parse(localStorage.getItem("users"))
    users.push(newUser)
    localStorage.setItem("users",JSON.stringify(users))
}
const deleteArray = () => {  
    localStorage.removeItem("users")
}
//--------------------------------
window.onload = () => {
    readString()
}