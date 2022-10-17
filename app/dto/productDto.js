const createProductDto = (product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
  description: product.description,
  image: product.image,
});

const updateProductDto = (product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
  description: product.description,
  image: product.image,
});

const getProductDto = (product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
  description: product.description,
  image: product.image,
});

const getProductsDto = (products) => products.map((product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
  description: product.description,
  image: product.image,
}));

const getCategoryDto = (products) => products.map((product) => (product.category));

const deleteProductDto = (product) => ({
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
  description: product.description,
  image: product.image,
});

module.exports = {
  createProductDto,
  updateProductDto,
  getProductDto,
  getCategoryDto,
  getProductsDto,
  deleteProductDto,
};
