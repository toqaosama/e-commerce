const router = require("express").Router();
const conn = require("../database/connection");
const {body , validationResult} = require("express-validator");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// register 

router.post("/register",
    body("email").isEmail().withMessage("please enter valid email!"),
    body("name").isString().withMessage("please enter valid name!").isLength({min: 10,max:20}),
    body("password").isLength({min: 8, max:12}).withMessage("please enter valid password!"),
    async (req, res)=>{
    try{
//1-validation request [manual , express validation]
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
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



    }catch (err){
        res.status(500).json({err: err})    }
});

//, login
router.post("/login",
    body("email").isEmail().withMessage("please enter valid email!"),
    body("password").isLength({min: 8, max:12}).withMessage("please enter valid password!"),
    async (req, res)=>{
    try{
//1-validation request [manual , express validation]
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array ()})
}

// check if the email is exist
//await/ async
const query = util.promisify(conn.query).bind(conn);
const checkEmailExists = await query("select * from users where email = ?",
    [req.body.email]
);
if (checkEmailExists.length == 0) {
    return res.status(400).json({
        errors: [
           { 
            msg: "user is not found!",
           },
        ],
    });
}
//compare password

const checkPassword = await bcrypt.compare(req.body.password,checkEmailExists[0].password )
if(checkPassword){
    delete checkEmailExists[0].password;
    res.status(200).json(checkEmailExists);
    
}else{
    res.status(404).json({
        errors:[
            {
                msg: "password is not correct !",
            },
        ],
    });
}


    }catch (err) {
        res.status(500).json({err: err});
    }
});


module.exports = router;