"use strict";

var User = require("../../models/User");
var UserSessions = require("../../models/UserSessions");

module.exports = function (app) {
  app.post("/api/account/signup", function (req, res, next) {
    console.log('req.body', req.body);
    var body = req.body;
    var firstName = body.firstName,
        lastName = body.lastName,
        password = body.password;
    var email = body.email;


    if (!firstName) {
      return res.send({
        success: false,
        message: "Error: First name cannot be blank"
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: "Error: Last name cannot be blank"
      });
    }

    if (!email) {
      return res.send({
        success: false,
        message: "Error: email cannot be blank"
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: password cannot be blank"
      });
    }

    email = email.toLowerCase();

    /*steps 
      1. verify email doesnt exist
      2. save
      */

    User.find({
      email: email
    }, function (err, previousUsers) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error1"
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: user already exists"
        });
      }

      var newUser = new User();

      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save(function (err, user) {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error2"
          });
        }
        console.log('successful add');
        return res.send({
          success: true,
          message: "Sign Up Successful!",
          user: user
        });
      });
    });
  });

  app.post("/api/account/signin", function (req, res, next) {
    var body = req.body;
    var password = body.password;
    var email = body.email;


    if (!email) {
      return res.send({
        success: false,
        message: "Error: email cannot be blank"
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: password cannot be blank"
      });
    }

    email = email.toLowerCase();

    User.find({
      email: email
    }, function (err, users) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      }
      var user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      }
      // otherwise correct user

      var userSessions = new UserSessions();
      userSessions.userId = user._id;
      userSessions.save(function (err, doc) {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }
        return res.send({
          success: true,
          token: doc._id
        });
      });
    });
  });

  // verify the token

  app.get("/api/account/verify", function (req, res, next) {
    var query = req.query;
    var token = query.token;
    //?token = test

    UserSessions.find({
      _id: token,
      isDeleted: false
    }, function (err, sessions) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      } else {
        return res.send({
          success: true,
          message: "Good"
        });
      }
    });
  });

  //log out
  app.get("/api/account/logout", function (req, res, next) {
    var query = req.query;
    var token = query.token;


    UserSessions.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: { isDeleted: true }
    }, null, function (err, sessions) {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      } else {

        return res.send({
          success: true,
          message: "Logout Successful! Happy Dating!"
        });
      }
    });
  });
};
//# sourceMappingURL=signin.js.map