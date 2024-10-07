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
    const zipCode = document.getElementById("zipCode").value;
    const password = document.getElementById("password").value;

    // fs.writeFile("Register.txt", `username: {username}`);
    alert(`Registered successfully!\nUsername: ${userName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile: ${mobileNumber}\nEmail: ${email}\nZip Code: ${zipCode}`);

//  TODO: check all the validation then store data in Register.txt

    // Register user data storing
    const data = {
        userName, firstName, lastName, mobileNumber, email, zipCode, password
    };
    console.log("post method calling");
    // Send a POST request to the server

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("err"));

    console.log("post method ends");
    //main function finish
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         alert("Registered successfully!");
    //         return response.text(); // Optional: handle server response
    //     } else {
    //         throw new Error("Registration failed");
    //     }
    // })
    // .then(data => {
    //     console.log(data); // Log any additional server response
    // })
    // .catch(error => {
    //     console.error(error);
    //     alert("An error occurred during registration.");
    // });
};

