const Course = require('../../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  // [GET] /
  async index(req, res) {
    await Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        console.log(courses);
        res.render('home', {
          courses,
        });
      })
      .catch((_) => {
        res.status(400).json({ error: 'Fail to get Course' });
      });
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
