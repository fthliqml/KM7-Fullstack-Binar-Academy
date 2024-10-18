const { Products, Sequelize } = require("../models");

const createProduct = async (req, res) => {
  const { name, stock, price } = req.body;
  try {
    const newProduct = await Products.create({
      name,
      stock,
      price,
    });
    res.status(201).json({
      status: "Success",
      message: "Successfully create new product",
      isSuccess: true,
      data: {
        newProduct,
      },
    });
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      const errorMessage = error.errors.map((err) => err.message);
      // Bad request (client)
      return res.status(400).json({
        status: "Failed",
        message: errorMessage,
        isSuccess: false,
        data: null,
      });
    }

    // Internal server error
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: false,
      data: null,
    });
  }
};

module.exports = { createProduct };
