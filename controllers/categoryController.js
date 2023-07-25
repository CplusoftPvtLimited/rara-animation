// const Category = require('../models/category');
var Category = require('../models/category').Category;
var Blog = require('../models/blog').Blog;

const createCategory = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(404).send({ message: 'title is required' });
  }

  try {
    const existingCategory = await Category.findOne({ where: { title } });
    console.log('existingCategory: ', existingCategory);
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: 'Category with this title already exists' });
    }

    const newCategory = await Category.create({
      title,
    });

    res.status(201).send({ message: 'Success', category: newCategory });
  } catch (err) {
    res.status(403).send({ err });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log('categories', categories);
    res.status(200).json(categories);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  if (!categoryId) {
    return res
      .status(400)
      .json({ error: 'Please add id to update the category' });
  }
  try {
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const updateCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Please add title' });
  }
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    if (title) {
      category.title = title;
    }
    console.log('category', category);

    await category.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const deleteCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  console.log('delete');
  if (!categoryId) {
    return res.status(400).json({ error: 'Please add id' });
  }
  try {
    const category = await Category.findByPk(categoryId);
    console.log('Category: ', category);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await Blog.destroy({ where: { categoryId } });

    await Category.destroy({ where: { id: categoryId } });

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(403).json({ err });
  }
};

// get all post by their respective category
const getBlogPostsByTitle = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Please add a title' });
  }
  try {
    const category = await Category.findOne({ where: { title } });
    console.log('Category:', category);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const posts = await Blog.findAll({
      where: {},
      include: [
        {
          model: Category,
          as: 'categories',
          where: { title },
        },
      ],
    });

    res.status(200).json({ posts });
  } catch (err) {
    res.status(403).json({ err });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getBlogPostsByTitle,
};
