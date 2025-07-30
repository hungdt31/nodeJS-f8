const Course = require("../../models/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            await Course.find({}).then((courses) => {
                courses = multipleMongooseToObject(courses)
                console.log(courses)
                res.render("home", {
                    courses,
                });
            });
        } 
        catch (error) {
            res.status(400).json({ error: "Fail to get Course" });
        }
    }
    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
