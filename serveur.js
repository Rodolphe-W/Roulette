const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./routes/index');
const version = "v1";
const { Sequelize } = require('sequelize');
const sequelize = require('./db/dbConnect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(`/api/${version}`, router);


(async function dbConnect(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();

const Student = require('./models/Student');

(async () => {

  await Student.sync();
  // Code here
  
})();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})