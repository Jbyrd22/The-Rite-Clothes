const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
	res.render('admin/signUp');
});

router.post('/signup', (req, res) => {
	console.log(req.body);
	res.redirect('/admin/products');
});

router.get('/admin/products', (req, res) => {
	res.render('admin/products');
});

module.exports = router;
