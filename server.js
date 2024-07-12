const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const connectDB = require('./config/db');
const auth = require('./routes/auth');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

connectDB();


app.use(bodyParser.json());


app.use(passport.initialize());
require('./config/passport')(passport);

//import router
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
