const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.use(authMiddleware);

router.get('/tokenValidate', (req, res) => {
    res.send({Auth: true, user: req.userId})
})

module.exports = router;