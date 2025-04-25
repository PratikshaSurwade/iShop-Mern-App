const Product = require("../models/Product");

const cloudinary = require('cloudinary').v2
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const file = req.files.photo;

    const result = await cloudinary.uploader.upload(file.tempFilePath);

    const newProduct = new Product({
      name: req.body.name,
      desc: req.body.desc,
      img: result.url,
      tab: req.body.tab,
      subtab: req.body.subtab,
      accesories: req.body.accesories,
      categories: req.body.categories,
      brand: req.body.brand,
      color: req.body.color,
      originalPrice: req.body.originalPrice,
      discountedPrice: req.body.discountedPrice,
      rating: req.body.rating,
    });

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);

  } catch (err) {
    console.error("Error while creating product:", err);
    res.status(500).json({ message: "Server Error", error: err });
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const qCategory = req.query.categories;
  const qSubtab = req.query.subtab;
  const qAccesories = req.query.accesories;
  const qBrand = req.query.brand;
  const qColor = req.query.color;
  try {
    let products;

    if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } if (qSubtab) {
      products = await Product.find({
        subtab: {
          $in: [qSubtab],
        },
      });
    } if (qColor) {
      products = await Product.find({
        color: {
          $in: [qColor],
        },
      });
    } if (qBrand) {
      products = await Product.find({
        brand: {
          $in: [qBrand],
        },
      });
    } if (qAccesories) {
      products = await Product.find({
        accesories: {
          $in: [qAccesories],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//select sub category 
router.get("/cat/:category/", async (req, res) => {
  try {
    const catfilter = await Product.find({ categories: req.params.category })
    res.status(200).json(catfilter);
  }
  catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
