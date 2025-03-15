const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  login: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  selectedItems: { type: Object, required: true },
  contactPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);