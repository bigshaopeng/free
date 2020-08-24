const connection = require('./connection')

connection.connect();

const GETSQL = (key) => {
    switch (key) {
        case 1:
            return 'CREATE DATABASE USER_DATA'
        case 2:
            return 'SELECT * FROM zsp'
        case 3:
            return `CREATE TABLE user_center ( id INT AUTO_INCREMENT, name VARCHAR(20), phone VARCHAR(11), PRIMARY KEY ( id ) )`
        case 4:
            return `INSERT INTO user_center (name, phone) VALUES ('a', '1'), ('b', '2'), ('c', '3')`
        case 5:
            return `UPDATE user_center SET name=3 WHERE id=3`
        case 6:
            return `DROP TABLE zsp`
        case 7:
            return `SELECT phone FROM user_center LIMIT 1 OFFSET 2`
    }
}
const sql = GETSQL(7);

connection.query(sql, (err, result) => {
    if (err) {
        throw err
    }
    console.log(result)
});

connection.end();