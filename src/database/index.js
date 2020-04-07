import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Challenge from '../app/models/Challenge';
import Approval from '../app/models/Approval';

const models = [User, Challenge, Approval];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}
export default new Database();
