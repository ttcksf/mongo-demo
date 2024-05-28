const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    hashedPass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;
