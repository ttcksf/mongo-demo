const userModel = require('../models/AuthModel');
// npm i bcrypt
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(8);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    username,
    // password,
    // Schemaも修正する
    hashedPass,
  });

  try {
    await newUser.save();
    // 保存できたらステータスコードを更新してjsonを返す
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { registerUser };
