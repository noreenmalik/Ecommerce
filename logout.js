var username = JSON.parse(localStorage.getItem('loginUserName'));

printUserName()


function printUserName() {
    if (username) {
        document.getElementById('username').innerText = username;
        document.getElementById('logIn').style.display = "none";
        document.getElementById('signup').style.display = "none";
        // document.getElementById("check1").href = "checkout.html";

    } else {
        document.getElementById('username').innerText = "";
        document.getElementById('logOut').style.display = "none";
        document.getElementById("check1").href = "signin.html";
        document.getElementById("check1").setAttribute("onclick", "alert('Please login!!!')")

    }
}

function logoutUser() {
    // localStorage.getItem('loginUserName')
    localStorage.removeItem('loginUserName')
    printUserName()
}