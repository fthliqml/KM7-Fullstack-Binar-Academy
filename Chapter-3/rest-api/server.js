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
  // select * from  .....
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
  // insert into ...
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

app.get("/api/v1/cars/:id", (req, res) => {
  // insert into ...
  const idCar = req.params.id;
  const cars = readJSON("cars.json");

  // == tidak peduli tipe datanya apa, 10 = "10"
  // === peduli tipe datanya apa, 10 != "10"

  // changing type string to integer --> "10" * 1 = 10 (number)

  // in cars's array, find object that contains id == idCar
  const car = cars.find((object) => object.id === idCar);

  // salah satu basic error handling
  // cant find spesific car
  if (!car) {
    return res.status(404).json({
      status: "failed",
      message: `cant find spesific data id : ${idCar}`,
      isSuccess: false,
      data: null,
    });
  }

  res.status(200).json({
    status: "success",
    message: "success get car data",
    isSuccess: true,
    data: {
      car,
    },
  });
});

// gunakan patch karna hanya mengubah satu atau beberapa data saja
app.patch("/api/v1/cars/:id", (req, res) => {
  // UPDATE .... from (table) where id = req.params.id
  const idCar = req.params.id;
  const cars = readJSON("cars.json");
  // Object destrcuture
  const { name, year, type } = req.body;

  const car = cars.find((object) => object.id === idCar);

  const carIndex = cars.findIndex((obj) => obj.id == idCar);

  // object assign menggunakan spread operator
  cars[carIndex] = { ...cars[carIndex], ...req.body };

  // masukan / rewrite data json dalam file
  fs.writeFile(
    `${__dirname}/assets/data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(404).json({
        status: "Failed",
        message: "API not exist",
      });
    }
  );

  res.status(201).json({
    status: "success",
    message: "success add new car data",
    isSuccess: true,
    data: {
      car: cars[carIndex],
    },
  });
});

// if url doesnt exist, run this code below
app.use((req, res, next) => {
  // status not found
  res.status(404).json({
    status: "failed",
    message: "API not found !",
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
