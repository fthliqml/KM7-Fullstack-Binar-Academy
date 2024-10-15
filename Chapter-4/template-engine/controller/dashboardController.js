const { User } = require("../models");

// Function for get all user data
async function userPage(req, res) {
    try {
        const users = await User.findAll();
        res.render("users/index", {
            title: "Dashboard",
            layout: "layouts/main-layout",
            style: "index.css",
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
        res.render("users/create", {
            title: "Create Form",
            layout: "layouts/main-layout",
            style: "create.css",
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
