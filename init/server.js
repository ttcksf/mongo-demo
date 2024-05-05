// npm init
// npm i express
// npm i nodemon
// npm i mongoose
// npm i cors
// npx nodemon server

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// URLエンコードされたデータを取得し、リクエストオブジェクト内に使用可能なオブジェクトに変換
// POSTリクエストハンドラー内で「request.body」にアクセスできるようになる
app.use(express.urlencoded({ extended: true }));
// JSON形式でやりとりする
app.use(express.json());
// Corsエラー対策
app.use(cors());

// MongoDbでDatabase→Brows Collectionsからデータベースを作成する
// Database Accessにあるユーザー情報を確認する
const dbUrl =
  'mongodb+srv://admin:ttc19930104@mongo-basic.hwnaw5l.mongodb.net/mongo-db?retryWrites=true&w=majority&appName=mongo-basic';
mongoose
  .connect(dbUrl)
  // .then(() => console.log('DB接続'))
  .then(() => app.listen('3000'))
  .catch((err) => console.log(err));
// エラーが出たらIPアドレスを追加してみる
// SecurityにあるNetwork Accessから「Add IP Adress」を選択して「Add current IP Address」をクリックして追加して再起動する
