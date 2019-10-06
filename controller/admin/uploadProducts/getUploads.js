module.exports = {
    getAnimal(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Animal'})
    },
    getFishery(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Fishery'})
    },
    getFruit(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Fruit'})
    },
    getGrain(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Grain'})
    },
    getEquipment(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Equipment'})
    },
    getPoultry(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Poultry'})
    },
    getService(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Service'})
    },
    getTuber(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Tuber'})
    },
    getVegetable(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Vegetable'})
    },
    getOther(req, res) {
        res.render('admin/uploadForm.ejs', { product: 'Other'})
    }
}