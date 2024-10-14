const { User } = require("../models");

// Function for get all user data
async function userPage(req, res) {
    try {
        const users = await User.findAll();
        res.render("index", {
            users,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to get users data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

function createPage(req, res) {
    try {
        res.render("create");
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to get users data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

function createUser(req, res) {
    try {
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to get users data",
            isSuccess: false,
            data: null,
            error: error.message,
        });
    }
}

module.exports = { userPage, createPage, createUser };
