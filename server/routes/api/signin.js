const User = require("../../models/User");
const UserSessions = require("../../models/UserSessions");

module.exports = app => {
  app.post("/api/account/signup", (req, res, next) => {
    console.log('req.body', req.body);
    const { body } = req;
    const { firstName, lastName, password } = body;
    let { email } = body;

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

    User.find(
      {
        email: email
      },
      (err, previousUsers) => {
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

        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
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
            user
          });
        });
      }
    );
  });

  app.post("/api/account/signin", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

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

    User.find(
      {
        email: email
      },
      (err, users) => {
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
        const user = users[0];
        if (!user.validPassword(password)) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          });
        }
        // otherwise correct user

        const userSessions = new UserSessions();
        userSessions.userId = user._id;
        userSessions.save((err, doc) => {
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
      }
    );
  });

  // verify the token

  app.get("/api/account/verify", (req, res, next) => {
    const { query } = req;
    const { token } = query;
    //?token = test

    UserSessions.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
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
      }
    );
  });

  //log out
  app.get("/api/account/logout", (req, res, next) => {
    const { query } = req;
    const { token } = query;

    UserSessions.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: { isDeleted: true }
      },
      null, (err, sessions) => {
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
    }
    );
  });
};
