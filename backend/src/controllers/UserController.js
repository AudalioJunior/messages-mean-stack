const express = require('express');
const router = express.Router();

const User = require('../models/UserModel');


router.post('/createUser', async (req, res) => {
    try {
        console.log(req.body)
        const user = new User({
            userName: req.body.name,
            password: req.body.password
        })
        user.save()
        return res.json({user});
    } catch (err) {
        return res.status(400).json({error: 'Error ao cadastrar'})
    }
})


module.exports = router;