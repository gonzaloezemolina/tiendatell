import pool from '../config/db.js';

const createUser = async (name,email,password) => {
    const query = `INSERT INTO users (name,email,password)
    VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [name,email,password];
    const create = await pool.query(query,values);
    return create.rows[0];
};

const getUserByCredentials = async (email,password) => {
    const query = `SELECT * FROM users WHERE email = $1 AND password = $2;`
    const values = [email,password];
    const verifyUserCredentials = await pool.query(query,values);
    return verifyUserCredentials.rows[0];
}

export default{
    createUser,
    getUserByCredentials
};