const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const People = sequelize.define("people", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    companyId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
    },
    department: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    salary: {
        type: Sequelize.FLOAT,
        allowNull: true,

    },
    managersId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    bonus: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    sex: {
        type: Sequelize.CHAR(1),
        allowNull: true,
    },
    spouse: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dependants: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = People;

