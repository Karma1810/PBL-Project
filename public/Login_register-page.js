var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    console.log("register")
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    //login and registered function not working baghun ghe atul
}

function login() {
    console.log("login")
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}