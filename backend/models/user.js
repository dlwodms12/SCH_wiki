const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true, min: 8 },
    Nickname: { type: String, required: true, unique: true, min: 5, max: 20 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
