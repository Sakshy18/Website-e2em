const express = require('express');
const router = express.Router();

require('../db/conn');
const Issue = require('../model/issueSchema');

router.post('/contact', (req, res)=>{
    const {fname, lname, email, phone, issueMsg} = req.body;

    if(!fname || !email || !phone || !issueMsg){
        return res.status(422).json({error:"Invalid"});
    }

    const issue = new Issue({fname, lname, email, phone, issueMsg});

    issue.save().then(()=>{
        res.status(201).json({message: "Submitted Successfully"});
    }).catch((err)=>res.status(500).json({error: "Not Submitted"}));

})

module.exports = router;