module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('challenges', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      facebook: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      instagram: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      linkedin: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      picpay: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
    return queryInterface.dropTable('challenge');
  },
};
