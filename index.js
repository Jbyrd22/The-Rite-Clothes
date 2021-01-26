require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/admin/auth');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ process.env.PASSPHRASE ] }));
app.use(authRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('TheRiteClothes App Has Started');
});
