const mongoose = require('mongoose');

const {Schema, model} = require('mongoose')

const paintingSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    prices: {
      card: {
        type: Number,
        required: true
      },
      sticker: {
        type: Number,
        required: true
      },
      package: {
        type: Number,
        required: true
      }
    },
    category: {
      type: String,
      enum: ['flowers', 'landscape', 'city', 'portrait', 'fruit', 'water'],
      required: true
    }
  });
  
  const Painting = model('Painting', paintingSchema);
  
  module.exports = Painting;