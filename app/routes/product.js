const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');

const productInst = new ProductController();

/**
 * @swagger
 *  /product:
 *    post:
 *      summary: Create Product
 *      requestBody:
 *         $ref: '#/components/requestBodies/CreateProductRequest'
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.post('/', productInst.create);

/**
 * @swagger
 *  /product:
 *    get:
 *      summary: Get All Product
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.get('/', productInst.getAll);

/**
 * @swagger
 *  /product/categories:
 *    get:
 *      summary: Get Product categories
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.get('/categories', productInst.getCategories);

/**
 * @swagger
 *  /product/category/{categoryName}:
 *    get:
 *      summary: Get Product categories
 *      parameters:
 *        - in: path
 *          name: categoryName
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.get('/category/:categoryName', productInst.getProductsByCategory);

/**
 * @swagger
 *  /product/{productId}:
 *    get:
 *      summary: Get Product by Id
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *            type: number
 *          required: true
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.get('/:productId', productInst.get);

/**
 * @swagger
 *  /product/{productId}:
 *    patch:
 *      summary: Update Product
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *            type: integer
 *          required: true
 *      requestBody:
 *         $ref: '#/components/requestBodies/UpdateProductRequest'
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.patch('/:productId', productInst.update);

/**
 * @swagger
 *  /product/{productId}:
 *    delete:
 *      summary: Delete Product
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *            type: integer
 *          required: true
 *      responses:
 *        "200":
 *          description: Ok
 *        "422":
 *          description: Validation Error
 *        "500":
 *           description: Server internal error
 */
router.delete('/:productId', productInst.delete);

module.exports = router;
