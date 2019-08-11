const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');

require('dotenv').config();     // access environment variables 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());                // Setup anywhere access
app.use(express.json());        // Url parsing now included in express (instead of bodyparser pkg)


// Login and Connection to Google Cloud MongoDB Atlas Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully!");
});

// Routes to exercises and users
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


// Express app listening for requests coming to port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


