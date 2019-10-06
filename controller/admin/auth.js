module.exports = {
    getSignIn(req, res){
        res.render('admin/signin.ejs')
    },
    getSignUp(req, res){
        res.render('admin/signup.ejs')
    },
    getuploadList(req, res) {
        res.render('admin/uploadList.ejs')
    },
    getuploadForm(req, res) {
        res.render('admin/uploadForm.ejs')
    }
}
