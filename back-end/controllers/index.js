/*
 * Index controller
 */

var index = {

    messageIp: (req) => {
        return "Votre adresse ip est " + req.ip;
    }
}

module.exports = index;