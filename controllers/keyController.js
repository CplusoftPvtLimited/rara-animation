const Key = require('../models/SecretKeys');

// Create a new key
const createKey = async (req, res) => {
  try {
    const { secretKey, clientKey, active } = req.body;
    console.log('body: ', req.body);
    if (!secretKey || !clientKey) {
      return res
        .status(400)
        .json({ message: 'Both secretKey and clientKey are required.' });
    }
    const key = await Key.create({ secretKey, clientKey, active });
    res.status(201).json({ message: 'key is successfully created', key: key });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the key.' });
  }
};

// Get all keys
const getAllKeys = async (req, res) => {
  try {
    const keys = await Key.findAll({ order: [['createdAt', 'DESC']] });
    res.json(keys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching keys.' });
  }
};

// Get a key by ID f f
const getKeyById = async (req, res) => {
  const id = req.params.id;

  try {
    const key = await Key.findByPk(id);
    if (!key) {
      return res.status(404).json({ message: 'Key not found.' });
    }
    res.json(key);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the key.' });
  }
};

// Update a key
const updateKey = async (req, res) => {
  const id = req.params.id;
  const { secretKey, clientKey, active } = req.body;
  console.log('body: ', req.body);
  try {
    const key = await Key.findByPk(id);
    if (!key) {
      return res.status(404).json({ message: 'Key not found.' });
    }
    if (secretKey !== undefined) {
      key.secretKey = secretKey;
    }
    if (clientKey !== undefined) {
      key.clientKey = clientKey;
    }

    if (active !== undefined) {
      key.active = active;
    }

    await key.save();
    res.status(202).json({ key: key });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while updating the key.' });
  }
};

// Delete a key
const deleteKey = async (req, res) => {
  const id = req.params.id;

  try {
    const key = await Key.findByPk(id);
    if (!key) {
      return res.status(404).json({ message: 'Key not found.' });
    }
    await key.destroy();
    res.json({ message: 'Key deleted successfully.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the key.' });
  }
};

module.exports = {
  createKey,
  getAllKeys,
  getKeyById,
  updateKey,
  deleteKey,
};
