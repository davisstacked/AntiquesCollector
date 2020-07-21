const express = require('express');
const app = express();
const PORT = 4000;

// ---------Controllers ------------------
const userCtrl = require('./controllers/userController');

//View engine
app.set('view engine', 'ejs');

//_____________Middleware________________//

// Express BodyParser
app.use(express.urlencoded({extended: false}));

//_________________ROUTES____________//

app.get('/', (req,res) => {
    res.render('index');
});


//_________________Listerner_____________//
app.listen(PORT, () => console.log(`Sever up on port ${PORT}`));