const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const {
    CreateUser,
    GetUser,
    Login

} = require('../../controller/users/index');
router.post('/user', CreateUser);
router.get('/user', GetUser)
router.post('/login', Login)


module.exports = router;
