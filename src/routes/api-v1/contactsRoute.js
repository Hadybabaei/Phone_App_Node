const express = require('express');
const contactController = require('../../controller/contactController');
const router = express.Router()

router.get('/contacts/:number?',contactController.getContacts)
router.post('/contacts',contactController.createContact)
router.put('/contacts/:id',contactController.updateContacts)
router.delete('/contacts/:id',contactController.deleteContacts)

module.exports = router;