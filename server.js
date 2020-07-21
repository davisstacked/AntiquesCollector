const express = require('express');
const app = express();
const PORT = 4000;

//____________Controllers_________________//
const userCtrl = require('./controllers/userController');

//View engine
app.set('view engine', 'ejs');

//_____________Middleware________________//

// Express BodyParser
app.use(express.urlencoded({extended: false}));

// Serve Static Assets (Front End JavaScript, CSS, Images, etc)
app.use(express.static(`${__dirname}/public`));

//_________________ROUTES____________//

app.use('/', userCtrl)


//_________________Listerner_____________//
app.listen(PORT, () => console.log(`Sever up on port ${PORT}`));