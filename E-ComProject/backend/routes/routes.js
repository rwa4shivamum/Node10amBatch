import express, { Router } from 'express'
import { createCategory, getAllCategory } from '../controller/categoryController.js'
import { bulkCreateProduct, createProduct, getProductByCategory, getSingleProduct } from '../controller/productController.js'
import { login, Register } from '../controller/authController.js'
import { middleWare } from '../middleware/authMiddleware.js'
import { addToCart, getCart, removeFromCart } from '../controller/cartController.js'
export const routes = Router()

//Category Routes
routes.post("/createCategory", createCategory)
routes.get("/getAllCategory", getAllCategory)

//ProductsRoutes
routes.post("/createBulkProduct", bulkCreateProduct)
routes.post("/createProduct", createProduct);
routes.get("/getCategoryProduct/:id", getProductByCategory);
routes.get("/singleProduct/:id", getSingleProduct)


//Auth Routes
routes.post("/registerUser", Register);
routes.post("/loginUser", login)

//Cart Routes
routes.post("/add",middleWare,addToCart);
routes.get("/", middleWare, getCart)
routes.post("/remove", middleWare, removeFromCart)