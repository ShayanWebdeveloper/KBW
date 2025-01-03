const userSchema = require("../../model/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SecretKey = 'Shayan'
const data = {
    name: "Shayan",
    password: 123456,
    email: "Shayan@gmail.com",

}







const CreateUser = async (req, res) => {
    const body = req.body
    const encryptPassword = await bcrypt.hash(body.password, 10);
    const response = await userSchema.create({ ...body, password: encryptPassword })
    const token = jwt.sign(response.toObject(), SecretKey)
    res.send({
        success: true,
        data: response,
       key: token
    })
}
const GetUser = async (req, res) => {
    const response = await userSchema.find()
    res.send({
        success: true,
        data: response
    })
}
const Login = async (req, res) => {

    const body = req.body
    const response = await userSchema.findOne(
        {
            email: body.email
        }
    )
    const isAuthenticate = await bcrypt.compare(body.password, response.password)
    res.send({
        success: true,
        data: response,
        isAuthenticate
    })
}
module.exports = {
    CreateUser,
    GetUser,
    Login
};
