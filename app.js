const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sinnay22',
    database: 'waterdata'
});

connection.connect();

function insertData(finalTime) {
    const sql = 'INSERT INTO data (timespent, user) VALUES (9)';
    const values = [10, 'yannis1'];

    connection.query('INSERT INTO data (timespent, user) VALUES (9, "yannis2")');
    /*connection.query(sql, values, (error, results, fields) => {
        if (error) throw error;
        console.log('Datensatz eingefügt!');
    });*/
}

module.exports = {
    insertData
};
