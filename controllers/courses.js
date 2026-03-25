const { getDb } = require('../data/database');

const getAllCourses = async (req, res) => {
  try {
    const courses = await getDb().collection('courses').find().toArray();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllCourses };