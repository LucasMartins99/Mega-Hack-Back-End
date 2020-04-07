module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('challenges', 'id_users', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('challenges', 'id_users');
  },
};
