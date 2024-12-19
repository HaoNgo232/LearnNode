const mongoose = require("mongoose");

// shape data
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true } // auto add created_at, updated_at
);
// const Customer = mongoose.model("user", customerSchema);
const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
