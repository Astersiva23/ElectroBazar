import express from 'express';
import { deleteProductDetails,updateProductDetails,getProductDetails,getProducts,newProducts } from '../controllers/productControllers.js';
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProducts);
router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProductDetails);
router.route("/products/:id").delete(deleteProductDetails);
export default router;

