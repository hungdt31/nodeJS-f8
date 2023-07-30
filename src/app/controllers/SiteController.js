const Course = require('../../models/Course');

class SiteController {
    // [GET] /
    async index(req, res){
        try {
            res.json(await Course.find({}))
        } catch (error) {
            res.status(400).json({ error: "Fail to get Course" })
        }
        // res.render('home')
    }
    // [GET] /search
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController