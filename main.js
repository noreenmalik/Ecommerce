var userArray = [];
window.onload = init;
var notexistEmail;

function addUser() {

    var username = document.forms["myForm"]["userName"].value;
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    var email1 = document.forms["myForm"]["email"].value;
    if (email1 == "") {
        alert("email must be filled out");
        return false;
    }
    var password1 = document.forms["myForm"]["password"].value;
    if (password1 == "") {
        alert("password must be filled out");
        return false;
    }
    if (password1.length < 6) {
        alert("password is weak try stronger password");
        return false;
    }
    var re_psw = document.forms["myForm"]["confirm-psw"].value;
    if (re_psw == "") {
        alert("Confirm your Password");
        return false;
    }
    
    if (email1 != "") {
        var x = email1;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
            alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
            return false;
        }
    }
    //singleton
    var user = {
        userName: username,
        email: email1,
        password1: password1,
        password2: re_psw
    };

    var data = (JSON.parse(localStorage.getItem("user")));
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email == user.email) {
                notexistEmail = data[i].email;
            }
        }
    }

    if (notexistEmail !== user.email || data == null) {

        if (user.password1 == user.password2) {
            userArray = JSON.parse(localStorage.getItem("user")) || [];
            userArray.push(user);
            localStorage.setItem("user", JSON.stringify(userArray));
          
            alert("successfully registered")
        } else {
            alert("password not match");
            return false;
        }
    } else {
        alert("user exist, already registered")
        return true;
    }
}





function validateForm() {

    var email1 = document.forms["myForm"]["email"].value;
    if (email1 == "") {
        alert("Enter your email");
        return false;
    }
    var password1 = document.forms["myForm"]["password"].value;
    if (password1 == "") {
        alert("password must be filled out");
        return false;
    }
    var enterEmail = email1
    var enterPassword = password1
    console.log('enterEmail: ', enterEmail)
    console.log('enterPassword: ', enterPassword)

    // nullpattren(enterEmail, enterPassword)
    // login
    var user = (JSON.parse(localStorage.getItem("user")));
    console.log("data", user)


    if (user == null) {
        alert("No data in database")
        window.location.replace("signup.html");
        return false;
    } else {
        console.log("length", user.length);
        for (var i = 0; i < user.length; i++) {
            if (user[i].email == enterEmail && user[i].password1 == enterPassword) {
                var validEmail = user[i].email;
                var validPassword = user[i].password1;
                var loginUserName = user[i].userName;
                break;
            }
        }

        alert("validEmail: " + validEmail)
        alert("validPassword: " + validPassword)

        if (validEmail == enterEmail && validPassword == enterPassword) {
            alert("successfully logged in ")
            localStorage.setItem("loginUserName", JSON.stringify(loginUserName));
            // return true;
        }
        else if (validEmail != enterEmail) {
            alert("You email or password is incorrect")
            return false
        }

        else if (validPassword != enterPassword) {
            alert("You email or password is incorrect")
            return false;
        }
    }
}




