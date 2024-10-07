

function checkUserName(str) {
    const userNamePattern = /^[A-Z][a-zA-Z0-9]*$/;
    if (!userName) {
        // throw new Error("Username is required.");
        // alert("Username is required.")
        return "Username is required.";
    }

    console.log(str[0] == /[A-Z]/);

    if(str[0] == /[A-Z]/) return "First letter must be capital";
    if (!userNamePattern.test(userName)) {
        return "Username must start with an uppercase letter and contain only letters and numbers with no spaces.";
    }
}

