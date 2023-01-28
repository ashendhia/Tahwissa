const User = require('./user')
const Region = require('./region')
const Wilaya = require('./wilaya')
const Site = require('./site')

Region.hasMany(Wilaya, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Wilaya.belongsTo(Region, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Wilaya.hasMany(Site, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Site.belongsTo(Wilaya, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
User.sync({ alter: true })
Region.sync({ alter: true })
Wilaya.sync({ alter: true })
Site.sync({ alter: true })

module.exports = {
    User, Region, Wilaya, Site
}