import { Router } from "express";
import productController from "../controllers/product.controller.js";

const productService = new productController();

const router = Router();

router.get('/products', productService.getProducts);
router.post('/product/create', productService.createProduct);
router.put('/product/update/:id', productService.updateProduct);
router.delete('/product/delete/:id', productService.deleteProduct);

export default router