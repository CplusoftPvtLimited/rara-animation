const Coinbase = require('../models/Coinbase');

const createCoinbase = async (req, res) => {
  try {
    const { checkoutId, active } = req.body;
    console.log('body: ', req.body);
    if (!checkoutId) {
      return res.status(400).json({ message: 'checkout Id are required.' });
    }
    const coinbase = await Coinbase.create({ checkoutId, active });
    res.status(201).json({
      message: 'Coinbase is successfully created',
      coinbase: coinbase,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the Coinbase.' });
  }
};

const getCoinbaseById = async (req, res) => {
  try {
    const coinbaseId = req.params.id;
    const coinbase = await Coinbase.findByPk(coinbaseId);
    console.log('coinbase :', coinbase);

    if (!coinbase) {
      return res.status(404).json({ message: 'Coinbase not found' });
    }

    res.json(coinbase);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching the Coinbase.' });
  }
};

// update
const updateCoinbaseById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('id: ', id);
    const { checkoutId, active } = req.body;

    const coinbase = await Coinbase.findByPk(id);
    console.log('checkoutId: ', checkoutId);
    if (!coinbase) {
      return res.status(404).json({ error: 'Coinbase not found' });
    }

    if (checkoutId !== undefined) {
      coinbase.checkoutId = checkoutId;
    }

    if (active !== undefined) {
      coinbase.active = active;
    }

    coinbase.checkoutId = checkoutId;
    await coinbase.save();

    res.json(coinbase);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = {
  createCoinbase,
  getCoinbaseById,
  updateCoinbaseById,
};
