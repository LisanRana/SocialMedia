const Category = require("../models/categoryModel");

// @desc   create a new category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findOne({ name });
    if (category) {
      return res.status(400).json({ msg: "Category already exists" });
    }
    const newCategory = new Category({ name });
    const resonse = await newCategory.save();
    res.status(201).json({ msg: "Category created successfully", resonse });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error.message });
  }
};

// @desc  update a category by id
const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findOne({ name });
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    const categoryItems = {};
    if (name) categoryItems.name = name;

    const updatedCategory = await Category.findByIdAndUpdate(
      catId,
      { categoryItems },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Category updated successfully", updatedCategory });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// @desc get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({msg:"categories found successfully", categories });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// @desc get a category by id
const getCategoryById = async (req, res) => {
  try {
    const catId = req.params.id;
    const category = await Category.findById(catId);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    res.status(200).json({ msg: "Category found successfully", category });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// @desc delete a category by id
const deleteCategory = async (req, res) => {
  try {
    const catId = req.params.id;
     const category=await Category.findOneAndDelete(catId);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    return res.status(200).json({ msg: "Category deleted successfully", category });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// @desc delete all categories

const deleteAllCategories = async (req, res) => {
    try {
        const response = await Category.deleteMany();
        res.status(200).json({ msg: "Categories deleted successfully", response });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    };
module.exports = { createCategory, updateCategory, getAllCategories, getCategoryById, deleteCategory, deleteAllCategories };
