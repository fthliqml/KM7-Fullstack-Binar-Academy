const express = require("express");
const morgan = require("morgan");

const app = express();

const { Students } = require("./models");

app.use(express.json());

app.get("/api/v1/health-check", async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Application passed health-check",
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Application failed passing health-check",
      isSuccess: false,
    });
  }
});

app.post("/api/v1/students", async (req, res) => {
  const newStudent = req.body;

  try {
    await Students.create(newStudent);

    res.status(200).json({
      status: "Success",
      message: "Application passed health-check",
      isSuccess: true,
      data: {
        newStudent,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Error creating new student",
      isSuccess: false,
      error: error.message,
    });
  }
});

app.get("/api/v1/students", async (req, res) => {
  try {
    const students = await Students.findAll();

    res.status(200).json({
      status: "Success",
      message: "Application passed health-check",
      isSuccess: true,
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Error creating new student",
      isSuccess: false,
      error: error.message,
    });
  }
});

module.exports = app;
