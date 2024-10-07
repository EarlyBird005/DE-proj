const login_btn = document.getElementById("login-btn");

login_btn.onclick = (e) => {
    e.preventDefault();
    // console.log("onclick called");
    const userName = document.getElementById("userName").value; 
    const password = document.getElementById("password").value;

    alert(`login successfully!\nUsername: ${userName}`);
};