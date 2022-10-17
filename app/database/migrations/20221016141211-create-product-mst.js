module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable(
      'products',
      {
        id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING },
        price: { type: DataTypes.BIGINT },
        category: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
      },
    );
    await queryInterface.sequelize.query('ALTER TABLE products AUTO_INCREMENT=600');
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('products');
  },
};
