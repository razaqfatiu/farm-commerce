module.exports = (DataTypes, sequelize) => {
    const Fishery = sequelize.define( 'fishery', {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productDetail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false
        }


    },{})
    return Fishery
}