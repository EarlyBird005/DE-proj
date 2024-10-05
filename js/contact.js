const btn = document.getElementById("contact-submit-btn");

btn.onclick = (e) => {
    e.preventDefault();
    console.log("onclick called");

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    alert(`Responce get send successfully`);
};