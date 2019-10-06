module.exports = (DataTypes, sequelize) => {
    const Tuber = sequelize.define( 'tuber', {
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
    return Tuber
}