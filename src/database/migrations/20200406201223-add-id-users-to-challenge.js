module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('challenge', 'id_users', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('challenge', 'id_users');
  },
};
