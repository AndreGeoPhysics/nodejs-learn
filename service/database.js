const { Client } = require('pg');

const client = new Client({
	user: 'geosain',
	password: 'geosain',
	host: 'localhost',
	port: '5432',
	database: 'vehicle',
});

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});

client.query('SELECT students.name, classes.name, teachers.name FROM classes INNER JOIN students ON classes.id = students.class_id INNER JOIN teachers ON classes.teacher_id = teachers.id;', (err, result) => {
    if (err) {
        console.error('Error executing query', err);
    } else {
        console.log('Query result:', result.rows);
    }
});

client
	.end()
	.then(() => {
		console.log('Connection to PostgreSQL closed');
	})
	.catch((err) => {
		console.error('Error closing connection', err);
	}
);