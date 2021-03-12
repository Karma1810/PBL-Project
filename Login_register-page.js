var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function userLogin() {
    console.log("Here")
    fetch('http://localhost:5000/user/login/abc/xyz', {
        method: 'GET', // or 'PUT'
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":true
        },
        mode: 'cors'
    }).then((res) => {
        // console.log(res.json());
        if(res.status === 200){
            // Redirect
        }
        else {

        }
        return res.message;
    }).then( (message) => {

    })
}