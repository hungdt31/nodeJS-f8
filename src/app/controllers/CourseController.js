const Course = require('../../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  create(req, res, _) {
    res.render('courses/create');
  }
  store(req, res, _) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch((_) => {
        res.send('ERROR !!');
      });
  }
  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  // [DELETE] /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id }, req.body)
      .then(() => res.redirect('back'))
      .catch(next);
  }
  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('back'))
      .catch(next);
  }
  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id }, req.body)
      .then(() => res.redirect('back'))
      .catch(next);
  }
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: 'Action invalid' });
    }
    // res.json(req.body)
  }
}
module.exports = new CourseController();
