const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isStared: {
      type: Boolean,
      required: true,
      trim: true,
    },
    imgs: {},
    videos: {},
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = { Product };
