const { User } = require("../models/User");
const sendMail = require("../utils/SendEmail.js");
const { CLIENT_URL } = process.env;
const { generateToken, verifyToken } = require("../utils/Jwt.js");
const jwt = require("jsonwebtoken");

const authCtrl = {
  register: async (req, res) => {
    try {
      const { email, password, name, pic } =
        req.body;
      //   Check if email exists
      const user_email = await User.findOne({ email });
      if (user_email)
        return res
          .status(409)
          .json({ msg: "Email Already Taken", success: false });
      // email Validation
      const validate = validateEmail(email);
      if (!validate)
        return res.status(409).json({ msg: "Email Invalid", success: false });
      // Check if name exists
      const user_name = await User.findOne({ name });
      if (user_name)
        return res
          .status(409)
          .json({ msg: "Name Already Registered", success: false });
      // check password Strenght
      if (password.length < 6)
        return res
          .status(422)
          .json({ msg: "password too weak", success: false });
      // New User
      const newUser = new User({
        name,
        email,
        emailValidation: false,
        password,
        username,
        birthday,
        gender,
        accountType,
      });
      await newUser.save();
      const emailActivationToken = generateToken(newUser.id, "email");
      const url = `${CLIENT_URL}/confirmEmail/${emailActivationToken}`;
      sendMail(email, url, "Verify your email address");
      res.status(202).json({
        msg: "Register Success! Please activate your email to start.",
        success: true,
        data: {
          email,
          name,
          username,
          gender,
          birthday,
          accountType,
          tokens: {
            accessToken: generateToken(newUser.id, "access"),
            refreshToken: generateToken(newUser.id, "refresh"),
          },
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },
  checkEmailAvailability: async (req, res) => {
    try {
      const email = req.body.email;
      const user_email = await User.findOne({ email });
      if (user_email)
        return res
          .status(409)
          .json({ msg: "Email Already Taken", success: false });
      res.status(200).json({ msg: "email available", success: true });
    } catch (err) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },
  checkUsernameAvailability: async (req, res) => {
    try {
      const username = req.body.username;
      const user_username = await User.findOne({ username: username });
      if (user_username)
        return res
          .status(409)
          .json({ msg: "username already taken", success: false });
      res.status(200).json({ msg: "username available", success: true });
    } catch (error) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },
  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const id = jwt.verify(activation_token, "email");
      if (id) {
        await User.findByIdAndUpdate(
          id,
          { verifiedEmail: true },
          { new: true }
        );
        res.json({ msg: "Email verified", success: true });
      } else {
        res.json({ msg: "verification token expired", success: false });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message, success: false });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(401).json({ success: false, msg: "wrong credentials" });
      } else if (!(await user.matchPassword(password))) {
        res.status(401).json({ success: false, msg: "wrong credentials" });
      } else if (user && (await user.matchPassword(password))) {
        res.cookie("accessToken", generateToken(user.id, "access"), {
          httpOnly: true,
          secure: true,
        });
        res.cookie("refreshToken", generateToken(user.id, "refresh"), {
          httpOnly: true,
          sercure: true,
        });
        res.cookie("accessToken", generateToken(user.id, "access"), {
          httpOnly: true,
          sercure: true,
        });
        res.status(200).json({
          data: {
            id: user.id,
            email: user.email,
            name: user.name,
            confirmedEmail: user.confirmedEmail,
            username: user.username,
            gender: user.gender,
            accountType: user.accountType,
          },
          success: true,
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, msg: error.messages });
    }
  },
  requestPasswordChange: async (req, res) => {
    // try {
    //   if (req.body.email) {
    //     const user = await User.findOne({ email: req.body.email }).select({
    //       email: 1,
    //       name: 1,
    //     });
    //     if (!user) {
    //       res.json({ msg: "No account with this email.", success: false });
    //     }
    //     if (user) {
    //       const payload = {
    //         email: user.email,
    //         name: user.name,
    //       };
    //       const changePasswordToken = createChangePasswordToken(payload);
    //       const url = `${CLIENT_URL}/ChangePassword/${changePasswordToken}`;
    //       sendMail(req.body.email, url, "Change you Password");
    //       res.json({
    //         msg: "A confirmation email was sent to you adress.",
    //         success: true,
    //       });
    //     }
    //   }
    // } catch (err) {
    //   return res.status(500).json({ msg: err.message, success: false });
    // }
  },
  changePassword: async (req, res) => {
    // try {
    //   const { activation_token } = req.body;
    //   const { password } = req.body;
    //   const user = jwt.verify(
    //     activation_token,
    //     process.env.CHANGE_PASSWORD_TOKEN_SECRET
    //   );
    //   if (password.length < 6)
    //     return res
    //       .status(400)
    //       .json({ msg: "password too weak", success: false });
    //   const salt = await bcrypt.genSalt(12);
    //   hashedPassword = await bcrypt.hash(password, salt);
    //   await User.findOneAndUpdate(
    //     { email: user.email },
    //     { password: hashedPassword }
    //   );
    //   res.status(201).json({ msg: "Password Updated", success: true });
    // } catch (err) {
    //   return res.status(500).json({ msg: err.message, success: false });
    // }
  },
  checkAuth: async (req, res) => {
    // token = req.header;
  },
  google: async (req, res) => {
    token = req.header;
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      res.status(200).json({ logout: true });
    } catch (error) {
      res.status(500).json({ msg: "an error " });
    }
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    try {
      // Verify the access token
      const decoded = verifyToken(refreshToken, "refresh");
      // Attach the decoded user information to the request object
      req.user = decoded;
      // Proceed to the next middleware or route handler
      res.cookie("accessToken", generateToken(decoded, "access"), {
        httpOnly: true,
        sercure: true,
      });
      res.status(200).json({ msg: "token refreshed" });
    } catch (error) {
      // If the access token is invalid or expired, return an error
      return res.status(401).json({ error: "Invalid token" });
    }
  },
};
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = authCtrl;
