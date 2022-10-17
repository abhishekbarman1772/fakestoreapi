const successResponse = require('../utils/responseModel');
const db = require('../models/index');

const Product = db.product;
const {
  createProductDto,
  updateProductDto,
  getProductDto,
  getProductsDto,
  deleteProductDto,
  getCategoryDto,
} = require('../dto/productDto');
const NotFoundError = require('../errorhandler/NotFoundError');

class ProductController {
  async create(req, res) {
    return successResponse(res, createProductDto(await Product.create(req.body)));
  }

  async getAll(req, res) {
    const product = await Product.findAll();
    return successResponse(res, getProductsDto(product));
  }

  async get(req, res) {
    const product = await Product.findByPk(req.params.productId);
    if (!product) throw new NotFoundError('Please mention correct Id');
    return successResponse(res, getProductDto(product));
  }

  async getCategories(req, res) {
    const product = await Product.findAll();
    return successResponse(res, getCategoryDto(product));
  }

  async getProductsByCategory(req, res) {
    const product = await Product.findAll({ where: { category: req.params.categoryName } });
    return successResponse(res, getProductsDto(product));
  }

  async update(req, res) {
    const product = await Product.findByPk(req.params.productId);
    if (!product) throw new NotFoundError('Please mention correct Id');
    await product.update(req.body);
    return successResponse(res, updateProductDto(await product.reload()));
  }

  async delete(req, res) {
    const product = await Product.findByPk(req.params.productId);
    if (!product) throw new NotFoundError('Please mention correct Id');
    await product.destroy({ force: true });
    return successResponse(res, deleteProductDto(product));
  }
}

module.exports = ProductController;
