const mongoose = require('mongoose');

async function connect() {
  await mongoose
    .connect('mongodb://localhost:27017/f8_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connect successfully');
    })
    .catch((_) => {
      console.log('Connect failure');
    });
}
module.exports = { connect };
