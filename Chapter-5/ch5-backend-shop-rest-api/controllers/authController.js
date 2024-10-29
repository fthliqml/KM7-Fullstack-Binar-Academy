const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Auths, Users } = require("../models");

const register = async (req, res, next) => {
  try {
    res.status(201).json({
      status: "Success",
      data: {},
    });
  } catch (err) {}
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const auth = await Auths.findOne({
      where: { email },
      include: [
        {
          model: Users,
          as: "user",
        },
      ],
    });
    // "Chelsie68@gmail.com" "$2b$10$LWzhG7ZRs8M4XFmDbevzTexnlIrJecVeL/KbzHys2pmqILDtJ457."
    if (!auth) {
      return res.status(404).json({
        status: "Failed",
        message: "Email not registered.",
        isSuccess: false,
        data: null,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, auth.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: "Failed",
        message: "Incorrect password !",
        isSuccess: false,
        data: null,
      });
    }

    // generate token
    const token = jwt.sign(
      {
        id: auth.id,
        name: auth.user.name,
        email: auth.email,
        role: auth.user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRED }
    );

    res.status(200).json({
      status: "Success",
      message: "Login Success !",
      isSuccess: false,
      data: {
        user: {
          id: auth.id,
          name: auth.user.name,
          email: auth.email,
          role: auth.user.role,
          token,
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const authenticate = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: {
        user: req.user,
      },
    });
  } catch (err) {}
};

module.exports = {
  register,
  login,
  authenticate,
};
