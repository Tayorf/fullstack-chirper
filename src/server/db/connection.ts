import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'thisischirper',
    password: 'password123',
    database: 'chirper'
});

export default pool;