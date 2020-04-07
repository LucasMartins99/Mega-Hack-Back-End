module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('approvals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      aprovado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('approvals');
  },
};
