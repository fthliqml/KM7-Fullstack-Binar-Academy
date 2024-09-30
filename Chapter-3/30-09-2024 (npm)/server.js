const express = require("express");

const app = express();
const port = 3000;

// default url = health check
// respon must return json
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running...",
  });
});

app.get("/iqmal", (req, res) => {
  // Status OK
  res.status(200).json({
    message: "Ping Successfully !",
  });
});

// Middleware / handler for url that doesnt defined in application
app.use((req, res, next) => {
  // status not found
  res.status(404).json({
    status: "failed",
    message: "API not exist !",
  });
});

app.listen(port, () => {
  console.log(`Application running in http://localhost:${port}`);
});
