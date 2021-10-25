const mongoose = require('mongoose');
// const slugify = require('slugify');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide item name'],
    trim: true,
  },
  categoryid: {
    type: Number,
    required: [true, 'Please provide item category'],
  },
  purchasedYear: {
    type: Number,
    required: [true, 'Please provide item purchased year'],
  },
  condition: {
    type: String,
    required: [true, 'Please provide item condition'],
    trim: true,
  },
  color: {
    type: String,
    required: [true, 'Please provide item color'],
    trim: true,
  },
  delivery: {
    type: Boolean,
    required: [true, 'Please provide delivery option'],
  },
  brand: {
    type: String,
    required: [true, 'Please provide item brand'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide item description'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Please provide item price'],
  },
  imageCover: {
    type: String,
    required: [true, 'Item requires a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
