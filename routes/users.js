const express = require('express');
const Users = require('../models/users');

const router = express.Router();

router.post('/registration',async(req,res)=>{
    try {
        const {name,email,password} = req.body
        console.log(req.body);

        let user = await Users.findById({email});

        if(user)
        {
            return res.json("User already exists");
        }

        const user = new Users({
            name,
            email,
            password
        })
        await user.save();
        return res.json("User registered successfully");
    } catch (error) {
        console.error(error.message);
    }
});

router.post('/login', async(req,res)=>{
    try {
        const {email,password} = req.body

        let user = User.findById({email});
        if(!user)
        {
            return res.json("User not exists")
        }
        if(user.password != password)
        {
            return res.json("Invalid Credentials");
        }
        return res.json("User loggedIn Successfully");
        
    } catch (error) {
        console.error(error.message)
    }
})



module.exports = router;