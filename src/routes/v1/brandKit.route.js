const express = require('express');
const { brandKitController } = require('../../controllers');
const { isAuth } = require('../../middlewares/testAuth');
const { handleMulterError, uploadS3 } = require('../../config/multer');

const router = express.Router();

// isAuth - middleware is required here

router.post('/', isAuth, uploadS3.any(), handleMulterError, brandKitController.createBrandKit);
router.get('/', brandKitController.getAllBrandKits);
router.get('/my-kits', isAuth, brandKitController.getAllBrandKitsByUser);
router.get('/:id', brandKitController.getBrandKitInfo);
router.patch('/:id', brandKitController.updateBrandKit);
router.delete('/:id', brandKitController.deleteBrandKit);

module.exports = router;
