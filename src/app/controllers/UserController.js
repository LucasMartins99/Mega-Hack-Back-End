import * as Yup from 'yup';
import User from '../models/User';
import Challenge from '../models/Challenge';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.number().required(),
      type: Yup.string().required(),
      size: Yup.string().required(),
      password: Yup.string().required().min(4),
      user: Yup.string().required().min(4),
      admin: Yup.boolean(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({ where: { user: req.body.user } });
    const nameExists = await User.findOne({ where: { name: req.body.name } });
    if (userExists) {
      return res.status(400).json({ error: 'user already exists.' });
    }
    if (nameExists) {
      return res.status(400).json({ error: 'name already exists.' });
    }
    const { id, name, phone, type, size, user, admin } = await User.create(
      req.body
    );
    const id_users = id;
    await Challenge.create({ id_users });
    return res.json({
      id,
      name,
      phone,
      type,
      size,
      user,
      admin,
    });
  }
}
export default new UserController();
