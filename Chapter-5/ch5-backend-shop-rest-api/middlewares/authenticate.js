const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  try {
    if (!bearerToken) {
      return res.status(401).json({
        status: "Failed",
        message: "Token is missing !",
        isSuccess: true,
        data: null,
      });
    }

    const token = bearerToken.split("Bearer ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: payload.id,
      name: payload.name,
      role: payload.role,
    };

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "Failed",
        message: "Token is expired. Please login again.",
        isSuccess: false,
        data: null,
      });
    }
    res.status(500).json({
      status: "Failed",
      message: error.message,
      isSuccess: true,
      data: null,
    });
  }
};
