const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.status(401).json({ message: "You do not have access/ Unauthorized User" });
};

module.exports = { isAuthenticated };