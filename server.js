const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const routes = require('./routes/api')
const app = express();
const PORT = process.env.PORT || 8080;
//const MongoDB_URL = 'mongodb+srv://praveen:praveen@cluster0.mz2hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//MongoDB Cluster username & password - praveen

mongoose.connect(process.env.MONODB_URI || 'mongodb://localhost/mern',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected')
});


 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/',routes);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT, console.log(`Server is running at ${PORT}`))