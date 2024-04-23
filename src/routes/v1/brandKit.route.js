const express = require('express');
// const { isAuth } = require('../../middlewares/testAuth');
const { brandKitController } = require('../../controllers');
const { brandUpload, handleMulterError } = require('../../config/multer');
const { isAuth } = require('../../middlewares/testAuth');

const router = express.Router();

// isAuth - middleware is required here

router.post('/', isAuth, brandUpload.any(), handleMulterError, brandKitController.createBrandKit);
router.get('/', brandKitController.getAllBrandKits);
router.get('/:id', brandKitController.getBrandKitInfo);
router.patch('/:id', brandKitController.updateBrandKit);
router.delete('/:id', brandKitController.deleteBrandKit);

module.exports = router;
