const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

// shape data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

userSchema.plugin(mongoose_delete);

const User = mongoose.model("user", userSchema);

module.exports = User;
