const userModel = require('../models/AuthModel');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  // エンドポイントのID
  const id = req.params.id;
  // 更新内容のパスワード
  const { password } = req.body;
  // console.log(req.params);
  // console.log(req.body);

  try {
    const user = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getUser, updateUser };
