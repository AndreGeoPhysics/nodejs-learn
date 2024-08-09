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
	var user = req.body.user
	var admin = req.body.isAdmin
	pool.query(`INSERT INTO master.users (name, is_admin) VALUES ('${user}', ${admin}) RETURNING id; `, (error, results) => {
		if (error) {
		throw error
		}
		res.send("success");
	})
});

router.patch('/users/:id', function(req, res, next) {
	const id = req.params.id
	const nama = req.body.nama
	const update_string = req.body.isAdmin
	pool.query(`UPDATE master.users SET is_admin = ${update_string}, name = '${nama}' WHERE id = ${id} RETURNING id; `, (error, results) => {
		if (error) {
		throw error
		}
		res.send("success");
	})
});

router.delete('/users/:id', function(req, res, next) {
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
		var data = results.rows
		var tableResult = "<tr><th>ID</th><th>Nama</th><th>Admin</th><th></th></tr>"
		for (var i = 0; i < data.length; i++) {
  			var tableRow = '<tr>';
			tableRow += `<td>${data[i]['id']}</td>`
  			tableRow += `<td>${data[i]['name']}</td>`
			tableRow += `<td>${data[i]['is_admin']}</td>`
			tableRow += `<td><div class="dropdown"><button class="dropbtn">Opsi</button><div class="dropdown-content"><a onclick="edit('${data[i]['id']}')">edit</a><a onclick="delete('${data[i]['id']}')">delete</a></div></div></td>`
  			tableRow += '</tr>';
  			tableResult+= tableRow
		}
		tableFinish = `<table>${tableResult}</table>`
		res.send(tableFinish);
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