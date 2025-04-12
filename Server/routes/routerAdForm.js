const express = require('express');
const router = express.Router();

//import controller
const connectionAdForm = require('../connection/connectionAdForm');

router.post('/push', connectionAdForm.connection);

module.exports = router;