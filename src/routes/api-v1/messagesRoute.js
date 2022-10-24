const express = require('express');
const messagesController = require('../../controller/messagesController');
const router = express.Router();

router.get('/messages/',messagesController.getMessages);

module.exports = router;