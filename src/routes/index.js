const express = require('express');
const router = express.Router();
const contactsRoute = require('./api-v1/contactsRoute')
const messagesRoute = require('./api-v1/messagesRoute')
const galleryRoute = require('./api-v1/galleryRoute')

router.use('/api',contactsRoute)
router.use('/api',messagesRoute)
router.use('/api',galleryRoute)

module.exports = router;