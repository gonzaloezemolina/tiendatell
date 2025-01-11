import pool from '../config/db.js'

const getCovers = async () => {
    const query = `SELECT * FROM covers ORDER BY id;`;
    const covers = await pool.query(query);
    return covers.rows;
};

const createCover = async (image_url) => {
    const query = `INSERT INTO covers (image_url) VALUES ($1) RETURNING *;`;
    const values = [image_url];
    const createCover = await pool.query(query,values);
    return createCover.rows[0];
};

const updateCover = async (id, image_url) => {
    const query = `UPDATE covers SET image_url = $1 WHERE id = $2 RETURNING *;`;
    const values = [image_url, id];
    const updateCover = await pool.query(query,values);
    return updateCover.rows[0];
};

const deleteCover = async (id) => {
    const query = `DELETE FROM covers WHERE id = $1 RETURNING *;`;
    const deleteCover = await pool.query(query,[id]);
    return deleteCover.rows[0];
};

export default{
    createCover,
    getCovers,
    updateCover,
    deleteCover
};