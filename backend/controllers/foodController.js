const foodModel = require("../models/foodModel.js");
const fs = require("fs");

//add food item

const addFood = async (req, res) => {
  const image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ sucess: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Failed to add food item" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to get food list" });
  }
};

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,() => {} );

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food item deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to delete food item" });
    }
};

module.exports = { addFood, listFood, removeFood };
