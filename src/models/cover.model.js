import pool from '../config/db.js'

const createCover = async (image_url) => {
    const query = `INSERT INTO covers (image_url) VALUES ($1) RETURNING *;`;
    const values = [image_url];
    const createCover = await pool.query(query,values);
    return createCover.rows[0];
};

export default{
    createCover
}