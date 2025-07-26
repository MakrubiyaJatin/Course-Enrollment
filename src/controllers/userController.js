const { User } = require('../models');

exports.createUser = async (req, res) => {
  try {
    const { name, email, domain, role } = req.body;
    const user = await User.create({ name, email, domain, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
