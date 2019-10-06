const db = require('../../../models/index')
const { Animal, Sequelize } = db
module.exports = {
    postAnimal(req, res) {
        const { pname, pprice, pdetails } = req.body
        Animal.sync().then(() => Animal.create({
            productName:pname,
            productPrice:pprice,
            productDetail:pdetails
        }).catch((err) => console.log(err)))
        res.redirect('/admin')
    },
}