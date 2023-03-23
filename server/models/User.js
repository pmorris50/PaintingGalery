const mongoose = require('mongoose');

const {Schema, model} = require('mongoose'); 
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (value) => {
          // Check if the value is a valid email address
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  });
  
//set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;