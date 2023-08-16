const Bank = require('../models/BankTransfer');

const createBank = async (req, res) => {
  const { bankTransfer, active } = req.body;
  console.log('bankTransfer', bankTransfer);
  if (!bankTransfer) {
    return res.status(400).send({ message: 'bankTransfer is required' });
  }

  try {
    const bankDetails = await Bank.create({
      bankTransfer,
      active,
    });
    console.log('bankDetails: ', bankDetails);
    res.status(201).send({ message: 'Success', bankDetails: bankDetails });
  } catch (err) {
    res.status(403).send({ err });
  }
};

const getBankDetails = async (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  if (!id) {
    return res
      .status(400)
      .json({ error: 'Please add id to update the category' });
  }
  try {
    const bankData = await Bank.findByPk(id);

    if (!bankData) {
      return res.status(404).json({ error: 'Bank Details not found' });
    }
    res.status(200).json(bankData);
  } catch (err) {
    res.status(403).json({ err });
  }
};

const updateBankDetailsById = async (req, res) => {
  const id = req.params.id;
  const { bankTransfer, active } = req.body;
  console.log('active: ', active);
  if (!bankTransfer) {
    return res
      .status(400)
      .json({ error: 'Please add a bank details to update data' });
  }
  try {
    const bankData = await Bank.findByPk(id);
    if (!bankData) {
      return res.status(404).json({ error: 'Bank Details not found' });
    }

    // console.log('bankData: ', bankData);

    if (bankTransfer !== undefined) {
      bankData.bankTransfer = bankTransfer;
    }
    if (active !== undefined) {
      bankData.active = active;
    }
    console.log('bankData: ', bankData);

    await bankData.save();

    res.status(200).json(bankData);
  } catch (err) {
    res.status(403).json({ err });
  }
};

module.exports = {
  createBank,
  getBankDetails,
  updateBankDetailsById,
};
