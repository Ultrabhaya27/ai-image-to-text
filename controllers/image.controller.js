const Image = require('../models/image.model');
const Tesseract = require('tesseract.js');

exports.processImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    // Process image with Tesseract
    const { data: { text } } = await Tesseract.recognize(
      req.file.path,
      'eng',
      { logger: m => console.log(m) }
    );

    // Save to database
    const image = new Image({
      userId: req.userId,
      originalImage: req.file.path,
      extractedText: text
    });

    await image.save();

    res.json({
      success: true,
      text,
      imageId: image._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing image' });
  }
};

exports.getUserImages = async (req, res) => {
  try {
    const images = await Image.find({ userId: req.userId })
      .sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images' });
  }
}; 