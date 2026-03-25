const { getDb } = require('../data/database');
const { ObjectId } = require('mongodb');

// GET ALL
const getAll = async (req, res) => {
  try {
    const students = await getDb().collection('students').find().toArray();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    const id = new ObjectId(req.params.id);
    const student = await getDb().collection('students').findOne({ _id: id });

    if (!student) return res.status(404).json({ message: "Not found" });

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST
const createStudent = async (req, res) => {
  try {
    const response = await getDb().collection('students').insertOne(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT
const updateStudent = async (req, res) => {
  try {

    if (!ObjectId.isValid(req.params.id)) {
     return res.status(400).json({ message: "Invalid ID format" });
    }
    const id = new ObjectId(req.params.id);

    const response = await getDb().collection('students').replaceOne(
      { _id: id },
      req.body
    );

    if (response.modifiedCount === 0)
      return res.status(404).json({ message: "Not found" });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteStudent = async (req, res) => {
  try {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    const id = new ObjectId(req.params.id);

    const response = await getDb().collection('students').deleteOne({ _id: id });

    if (response.deletedCount === 0)
      return res.status(404).json({ message: "Not found" });

    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createStudent,
  updateStudent,
  deleteStudent
};