module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('products', {
    title: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.BIGINT,
    },
    category: {
      type: Sequelize.BIGINT,
    },
    description: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    createdAt: { field: 'created_at', type: Sequelize.DATE, allowNull: false },
    updatedAt: { field: 'updated_at', type: Sequelize.DATE, allowNull: false },
  });
  return Product;
};
