const validateStudent = (req, res, next) => {
  const { firstName, lastName, email, age } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!age || age < 1) {
    return res.status(400).json({ error: "Valid age required" });
  }

  next();
};

module.exports = { validateStudent };