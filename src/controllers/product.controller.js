import productModel from "../models/product.model.js";

export default class productController {
    // Obtener
    getProducts = async (req,res) => {
        try {
            const get = await productModel.getProducts();
            res.status(200).json(get);
        } catch (error) {
            console.log("Error en getProducts controller:", error);
        }
    };

    // crear
    createProduct = async (req,res) => {
        try {
            const {name,description,price,stock,image_url,category_id} = req.body;
            const create = await productModel.createProduct(name,description,price,stock,image_url,category_id);
        } catch (error) {
            console.log("Error en createProduct controller:", error);
        }
    };

    updateProduct = async (req,res) => {
        try {
            const {id} = req.params
            const {name,description,price,stock,image_url,category_id} = req.body
            const updateProd = await productModel.updateProduct(id,name,description,price,stock,image_url,category_id);
            res.json({message: "Producto actualizado correctamente"});            
        } catch (error) {
            console.log("Error en updateProduct controller:", error);
        }
    }

    // borrar
    deleteProduct = async (req,res) => {
        try {
            const {id} = req.params;
            const deleteProduct = await productModel.deleteProduct(id);
            res.json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            console.log("Error en deleteProduct controller:", error);
        }
    }
};