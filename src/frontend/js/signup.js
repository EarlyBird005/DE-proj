// const fs = require("fs");
const registern_btn = document.getElementById("register-btn");

registern_btn.onclick = (e) => {
    e.preventDefault();
    console.log("onclick called");
    const userName = document.getElementById("userName").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // fs.writeFile("Register.txt", `username: {username}`);
    alert(`Registered successfully!\nUsername: ${userName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile: ${mobileNumber}\nEmail: ${email}`);
};