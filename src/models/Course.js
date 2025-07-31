const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, default: 'no name', maxLength: 255, required: true },
  description: { type: String, maxLength: 600 },
  image: { type: String},
  videoId: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name', unique: true}
},{
  timestamps: true,
});
// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
});
module.exports = mongoose.model('Course', Course);
