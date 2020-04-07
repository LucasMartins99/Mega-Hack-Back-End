import Sequelize, { Model } from 'sequelize';

class Challenge extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        facebook: Sequelize.TEXT,
        instagram: Sequelize.TEXT,
        linkedin: Sequelize.TEXT,
        picpay: Sequelize.TEXT,
        nivel: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_users' });
  }
}
export default Challenge;
