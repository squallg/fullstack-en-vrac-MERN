/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var login = require('../controllers/login');


/* POST login */
router.post('/', function(req, res, next) {
    res.json(login.checkLogin(req));
});

module.exports = router;