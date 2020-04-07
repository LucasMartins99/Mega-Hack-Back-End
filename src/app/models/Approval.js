import Sequelize, { Model } from 'sequelize';

class Approval extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        aprovado: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Challenge, { foreignKey: 'id_challenges' });
  }
}
export default Approval;
