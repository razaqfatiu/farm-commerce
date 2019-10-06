module.exports = (DataTypes, sequelize) => {
    const Vegetable = sequelize.define( 'vegetable', {
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
    return Vegetable
}