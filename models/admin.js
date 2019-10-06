module.exports = (DataTypes, sequelize) => {
    const Admin = sequelize.define ('admin', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isOnline: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {})

    return Admin
}
