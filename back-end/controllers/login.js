/*
 * Login controller
 */

function checkPasswordRequirements(password, credentials, response) {
    var passwordRegex = /^[a-z0-9]+$/i;

    if(password.length < 8) {
        response.connected = false;
        response.message = "Le mot de passe doit contenir au moins 8 caratères";
    }
    else if(passwordRegex.test(password)) {
        response.connected = false;
        response.message = "Le mot de passe doit contenir au moins un symbole spécial";
    }
    else if(password != credentials.password){
        response.connected = false;
        response.message = "Mauvais mot de passe";
    }
    else {
        response.connected = true;
        response.message = "Vous êtes connecté";
    }

    return response;
}

var login = {

    checkLogin: (req) => {
        var username = req.body.username;
        var password = req.body.password;
        var credentials = {
            username: "GG",
            password: "AZERTYUIOP1234567890#"
        }
        var response = {};
        

        if(username == credentials.username) {
            response = checkPasswordRequirements(password, credentials, response)
        }
        else {
            response.connected = false;
            response.message = "Mauvais nom d'utilisateur";
        }

        return response;


    }
}


module.exports = login;