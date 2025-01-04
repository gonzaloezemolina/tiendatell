import pool from '../config/db.js';

const createUser = async (name,email,password) => {
    const query = `INSERT INTO users (name,email,password)
    VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [name,email,password];
    const create = pool.query(query,values);
    return (await create).rows[0];
};

export default{
    createUser
};