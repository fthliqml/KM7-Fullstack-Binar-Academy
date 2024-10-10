const morgan = require("morgan");
const express = require("express");
const usersRoute = require("./routes/usersRoute");
const carsRoute = require("./routes/carsRoute");
const sparepartsRoute = require("./routes/sparepartsRoute");
const driverRoutes = require("./routes/driverRoute");

const app = express();
const port = 3000;

// Reading json from body (client)
app.use(express.json());

// Middleware logging || third party package
// Simple call morgan :
// app.use(morgan("dev"));

// Morgan self config
morgan.token("host", function (req, res) {
    return req.hostname;
});
morgan.token("param", function (req, res, param) {
    return req.params[param];
});
app.use(morgan(":method host: :host :status :param[id] :res[content-length] - :response-time ms"));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Health Check
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            status: "Succeed",
            message: "Ping successfully",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Ping failed",
            isSuccess: false,
            error: error.message,
        });
    }
});

// Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/cars", carsRoute);
app.use("/api/v1/spareparts", sparepartsRoute);
app.use("/api/v1/drivers", driverRoutes);

// Middleware to handle page not found
app.use((req, res, next) => {
    res.status(404).json({
        status: "Failed",
        message: "API not found !",
        isSuccess: false,
    });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
