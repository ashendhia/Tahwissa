const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Site extends Model { }

Site.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [0, 1024]
        }
    },
    visits: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [10]
        }
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "0"
    },
    beginHour: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: "08:00:00"
    },
    endHour: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: "17:00:00"
    },
    position: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue("position"));
        },
        set(value) {
            return this.setDataValue("position", JSON.stringify(value));
        }
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'site'
})

module.exports = Site