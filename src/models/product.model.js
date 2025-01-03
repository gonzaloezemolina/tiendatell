import pool from "../config/db.js";

// Obtener
const getProducts = async () => {
    const get = await pool.query('SELECT * FROM products ORDER BY id');
    return get.rows;
};

// Crear
const createProduct = async (name,description,price,stock,image_url,category_id) => {
    const query = `INSERT INTO products (name,description,price,stock,image_url,category_id)
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;
    `;
    const values = [name,description,price,stock,image_url,category_id];
    const create = await pool.query(query,values);
    return create.rows[0];
};

// Actualizar
const updateProduct = async (id, name, description, price, stock, image_url, category_id) => {
    const query = `
        UPDATE products
        SET name = $1, description = $2, price = $3, stock = $4, image_url = $5, category_id = $6
        WHERE id = $7
        RETURNING *;
    `;
    const values = [name, description, price, stock, image_url, category_id, id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
        throw new Error('Producto no encontrado');
    }
    return result.rows[0];
};

// Eliminar
const deleteProduct = async (id) => {
    const deleteProduct = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (deleteProduct.rowCount === 0) {
        throw new Error('Producto no encontrado');
    }
    return deleteProduct.rows[0];
};

export default {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}