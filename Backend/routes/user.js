const router = require('express').Router();

router.route('/login/:username/:password').get((req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    // Search in database

    // If user found
    console.log("here")
    res.status(200).json({message : "User logged in!"})
})

module.exports = router;