var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool;
const bodyParser = require('body-parser');

const pool = new Pool({
	user: 'geosain',
	password: 'geosain',
	host: 'localhost',
	port: '5432',
	database: 'vehicle',
});

router.post('/users', function(req, res, next) {
	pool.query(`INSERT INTO master.users (name, is_admin) VALUES ('${req.body.nama}', ${req.body.isAdmin}) RETURNING id; `, (error, results) => {
		if (error) {
		throw error
		}
		res.send("success");
	})
});

router.patch('/users', function(req, res, next) {
	nama = req.body.nama
	update_string = req.body.isAdmin
	pool.query(`UPDATE master.users SET is_admin = ${update_string} WHERE name = '${nama}' RETURNING id; `, (error, results) => {
		if (error) {
		throw error
		}
		res.send("success");
	})
});

router.delete('/users', function(req, res, next) {
	nama = req.body.nama
	pool.query(`DELETE FROM master.users WHERE name = '${nama}' RETURNING id; `, (error, results) => {
		if (error) {
		throw error
		}
		res.send("success");
	})
});

router.get('/users', function(req, res, next) {
	pool.query('SELECT * FROM master.users', (error, results) => {
		if (error) {
		throw error
		}
		var result = results.rows
		res.send(result);
	})
});

router.get('/users/:id', function(req, res, next) {
	var id = req.params.id;
		pool.query(`SELECT * FROM master.users WHERE id=${id}`, (error, results) => {
			if (error) {
			throw error
			}
			var result = results.rows
			res.send(result);
		})
});

module.exports = router;