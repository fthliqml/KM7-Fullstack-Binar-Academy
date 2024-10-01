const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

// middleware untuk membaca json dari request body(client) ke server
app.use(express.json());

// root
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Ping Successfully !",
  });
});

// /api/(version)/(collection) => collection harus jamak(s)
app.get("/api/v1/cars", (req, res) => {
  try {
    const cars = readJSON("cars.json");
    res.status(200).json({
      status: "success",
      message: "success get cars data",
      isSuccess: true,
      totalData: cars.length,
      data: {
        cars,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "failed get cars data",
      isSuccess: false,
      data: null,
    });
  }
});

// create
app.post("/api/v1/cars", (req, res) => {
  // tambahin try-catch
  const cars = readJSON("cars.json");
  const newCar = req.body;
  cars.push(newCar);
  fs.writeFile(
    `${__dirname}/assets/data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(201).json({
        status: "success",
        message: "success add new car data",
        isSuccess: true,
        data: {
          car: newCar,
        },
      });
    }
  );
});

// if url doesnt exist, run this code below
app.use((req, res, next) => {
  // status not found
  res.status(404).json({
    status: "failed",
    message: "url not found !",
  });
});

app.listen(port, () => {
  console.log(`Application running in http://localhost:${port}`);
});

function readJSON(file) {
  const readFile = fs.readFileSync(`${__dirname}/assets/data/${file}`, "utf-8");
  const getJson = JSON.parse(readFile);

  return getJson;
}
