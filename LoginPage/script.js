let user = document.getElementById("user");
let pass = document.getElementById("pass");

function entering() {
    if (user.value === "Anis123" && pass.value === "Anis@123") {
        alert("Log In Successful");
    } else if (user.value === "" && pass.value === "") {
        alert("Please enter your credentials");
    } else {
        alert("Wrong user id or password");
    }
}
