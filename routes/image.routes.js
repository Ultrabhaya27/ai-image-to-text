const router = require('express').Router();
const imageController = require('../controllers/image.controller');
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/process', authMiddleware, upload.single('image'), imageController.processImage);
router.get('/history', authMiddleware, imageController.getUserImages);

module.exports = router; 