import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import Challenge from '../models/Challenge';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      user: Yup.string().required(),
      password: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { user, password } = req.body;
    const Users = await User.findOne({ where: { user } });
    if (!Users) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await Users.checkPassword(password))) {
      return res.status(401).json({ error: 'password does not match' });
    }

    const { id, admin, name } = Users;
    const desafio = await Challenge.findOne({ where: { id_users: id } });
    const { nivel } = desafio;
    const id_desafio = desafio.id;
    return res.json({
      dados: {
        id,
        admin,
        name,
        nivel,
        id_desafio,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
