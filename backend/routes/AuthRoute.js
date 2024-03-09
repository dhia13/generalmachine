const router = require("express").Router();
const AuthCtrl = require("../controllers/AuthController");
const { protect, Admin } = require("../utils/Authentication");
const checkToken = require("../utils/Authentication");
//register
router.post("/register", AuthCtrl.register);
// register check if email is available
router.post("/checkEmailAvailability", AuthCtrl.checkEmailAvailability);
// register check if username is available
router.post("/checkUsernameAvailability", AuthCtrl.checkUsernameAvailability);
//activate account verify email
router.post("/activation", AuthCtrl.activateEmail);
//login
router.post("/login", AuthCtrl.login);
//request change password
router.post("/requestPasswordChange", AuthCtrl.requestPasswordChange);
// change password
router.post("/changePassword", AuthCtrl.changePassword);
router.post("/logout", AuthCtrl.logout);
router.post("/google", AuthCtrl.google);
router.get("/protected", checkToken, (req, res) => {
  res.status(200).json({ succes: true });
});
router.post("/refreshToken", AuthCtrl.refreshToken);

module.exports = router;
