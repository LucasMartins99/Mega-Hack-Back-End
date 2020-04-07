module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('approvals', 'id_challenges', {
      type: Sequelize.INTEGER,
      references: { model: 'challenges', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('approvals', 'id_challenges');
  },
};
