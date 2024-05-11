const express = require('express');
const { registerUser } = require('../controllers/AuthController');

const router = express.Router();

// router.get('/', async (req, res) => {
//   res.send('Auth');
// });
router.post('/register', registerUser);
// Thunder Clientをインストール(データ操作を画面なしで実行できる)
// Collectionタブに切り替えてNewCollection
// コレクションからNewFolder
// コレクションからNewRequest
// localhost:3000/auth/registerをURLにしてメソッドをPOSTにする
// Bodyタブに切り替えてデータ入力({"username": "山田太郎","password": "test1234"})
// sendをクリックしてMongoDB確認
module.exports = router;
