const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/UserController');

// 接続の確認
router.get('/', async (req, res) => {
  res.send('user');
});

// ユーザー情報の取得(postではなくget)
router.get('/:id', getUser);

module.exports = router;
