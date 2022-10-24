const express = require('express');
const galleryController = require('../../controller/galleryController');
const router = express.Router();

router.post('/gallery',galleryController.createPhoto);
router.get('/gallery',galleryController.getAllPhotos);

module.exports = router;