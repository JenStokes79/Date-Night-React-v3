"use strict";

var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

/*generate hash*/
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
/*validate password*/
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map