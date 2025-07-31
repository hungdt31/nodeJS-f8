const Course = require('../../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.findDeleted({})])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
          deletedCount: deletedCount.filter((course) => course.deleted).length,
        })
      )
      .catch(next);
  }
  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) }))
      .catch(next);
  }
}
module.exports = new MeController();
