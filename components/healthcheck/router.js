const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(OK');
});

router.get('/full', (req, res) => {
    res.json(
        status: 'Alive'
        version: process.env.npm_package_version,
    });
});

module.exports = router;