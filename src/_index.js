const express = require('express');
const morgan = require('morgan');
const methouOverride = require('method-override');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

class App {
  constructor() {
    this.instance = express();
    this.config();
    require('dotenv').config();
    this.port = process.env.PORT || 3000;
  }

  config() {
    const obj = {
      urlencoded: express.urlencoded({
        extended: true,
      }),
      json: express.json(),
      formMethod: methouOverride('_method'),
      httpLog: morgan('combined'),
      static: express.static(path.join(__dirname, '../public')),
    };
    Object.values(obj).map((value, _) => {
      this.instance.use(value);
    });
    this.setView();
  }

  setView() {
    this.instance.engine(
      'hbs',
      handlebars.engine({
        extname: '.hbs',
        helpers: {
          sum: (a, b) => a + b,
        },
      })
    );
    this.instance.set('view engine', 'hbs');
    this.instance.set('views', path.join(__dirname, 'resources/views'));
  }

  listenEvent() {
    route(this.instance);
    db.connect();
    this.instance.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

const app = new App();

app.listenEvent();
