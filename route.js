const {Router} = require("express");
const {join} = require("path");
const Mail = require("./Mail");
const express = require("express");
const router = Router();
const urlencodedParser = express.urlencoded({extended: false});
const config = require("config");
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})
router.post('/email', urlencodedParser, (req, res) => {
    if (req.body.target === "consult") {
        let email = new Mail(config.get('email'), req.body.subject, req.body.text);
        res.send(email.sendMail());
        return res.sendStatus(200);
    } else if (req.body.target === "email") {
        let email = new Mail(req.body.email, req.body.subject, req.body.text);
        res.send(email.sendMail());
        return res.sendStatus(200);
    } else if (req.body.target === "callback") {
        let email = new Mail(config.get('email'), req.body.subject, req.body.text);
        res.send(email.sendMail());
        return res.sendStatus(200);
    } else {
        return res.sendStatus(400);
    }

});
module.exports = router;