const imagekit = require("../config/imagekit");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No image selected",
      });
    }

    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
    });

    res.json({
      imageUrl: result.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Image upload failed",
    });
  }
};

module.exports = { uploadImage };