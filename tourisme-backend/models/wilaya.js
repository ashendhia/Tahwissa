const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Wilaya extends Model { }

Wilaya.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [0, 122]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [0, 1024]
        }
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'wilaya'
})

module.exports = Wilaya