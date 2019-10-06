const express = require('express');
const router = express.Router();
const adminAuth = require('../controller/admin/auth')
const { getSignIn, getSignUp, getuploadList } = adminAuth

const { getAnimal,getFishery, getFruit, getEquipment, getGrain, getPoultry, getService, getTuber, getVegetable, getOther } = require('../controller/admin/uploadProducts/getUploads')
const { postAnimal } = require('../controller/admin/uploadProducts/postUploads')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/signin', getSignIn)
router.get('/signup', getSignUp)

router.get('/uploadList', getuploadList)

router.get('/uploadAnimal', getAnimal)
router.get('/uploadFishery', getFishery)
router.get('/uploadFruit', getFruit)
router.get('/uploadGrain', getGrain)
router.get('/uploadEquipment', getEquipment)
router.get('/uploadPoultry', getPoultry)
router.get('/uploadService', getService)
router.get('/uploadTuber', getTuber)
router.get('/uploadVegetable', getVegetable)
router.get('/uploadOther', getOther)


router.post('/uploadAnimal', postAnimal)


module.exports = router
