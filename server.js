// npm init
// npm i express
// npm i nodemon
// npm i mongoose
// npm i cors
// npm i dotenv
// npx nodemon server

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// dotenvをインポート
const dotenv = require('dotenv');
dotenv.config();
const dbUrl = process.env.MONGO_DB;
mongoose
  .connect(dbUrl)
  // .then(() => app.listen('3000'))
  .then(
    // () => console.log(`${process.env.PORT}`)
    () => app.listen(process.env.PORT, () => console.log(`${process.env.PORT}`))
  )
  .catch((err) => console.log(err));
