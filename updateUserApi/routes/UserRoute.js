const express = require('express');
const router = express.Router();
// updateUserのインポート
const { getUser, updateUser } = require('../controllers/UserController');

router.get('/', async (req, res) => {
  res.send('user');
});

router.get('/:id', getUser);
// putで実行する
router.put('/:id', updateUser);

module.exports = router;
