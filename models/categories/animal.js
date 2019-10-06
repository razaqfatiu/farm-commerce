module.exports = (DataTypes, sequelize) => {
    const Animal = sequelize.define( 'animal', {
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
            // allowNull: false
        }


    },{})
    return Animal
}