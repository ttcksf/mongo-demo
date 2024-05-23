// userModelをここでも再利用
const userModel = require('../models/AuthModel');

// ユーザー情報の取得
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { getUser };
