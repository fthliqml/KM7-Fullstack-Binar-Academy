"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false, // Definisikan di migration dan model
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [
          "https://ik.imagekit.io/iqmal/image-car23_SopUwwZfQ.jpg?updatedAt=1729091144136",
        ],
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          //Ga ngaruh kalo di migration pake validate
          max: 10000,
        },
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5000,
        validate: {
          min: 5000,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
