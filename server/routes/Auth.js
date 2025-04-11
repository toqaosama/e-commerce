const router = require("express").Router();
const conn = require("../database/connection");
const {body , validationResult} = require("express-validator");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// register , login

router.post("/register",
    body("email").isEmail().withMessage("please enter valid email!"),
    body("name").isString().withMessage("please enter valid name!").isLength({min: 10,max:20}),
    body("password").isLength({min: 8, max:12}).withMessage("please enter valid password!"),
    async (req, res)=>{
    try{
//1-validation request [manual , express validation]
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.async ()})
}

// check if the email is exist
//await/ async
const query = util.promisify(conn.query).bind(conn);
const checkEmailExists = await query("select * from users where email = ?",
    [req.body.email]
);
if (checkEmailExists.length > 0) {
    return res.status(400).json({
        errors: [
           { 
            msg: "user is exist !",

           },
        ],
    });
}
// prepare object user to save
const userData = {
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
    token: crypto.randomBytes(16).toString("hex"),//jason web token , crypto -->random encryption stander
};
// insert user to object into db

await query("insert into users set ?", userData);
delete userData.password;

res.status(200).json(userData);


res.json("Success");
    }catch (err){
        res.status(500).json({err: err})    }
});



module.exports = router;