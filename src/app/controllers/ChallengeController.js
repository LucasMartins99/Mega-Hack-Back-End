import * as Yup from 'yup';
import Approval from '../models/Approval';
import Challenge from '../models/Challenge';

class ChallengeController {
  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string(),
      cnpj: Yup.string(),
      facebook: Yup.string(),
      instagram: Yup.string(),
      linkedin: Yup.string(),
      picpay: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'error validation fails' });
    }
    const challenge = await Challenge.findByPk(req.params.id);
    const {
      id,
      email,
      cnpj,
      facebook,
      instagram,
      linkedin,
      picpay,
      nivel,
    } = await challenge.update(req.body);
    const id_challenges = id;
    const type = 'Facebook';
    await Approval.create({ id_challenges, type });
    return res.json({
      id,
      email,
      cnpj,
      facebook,
      instagram,
      linkedin,
      picpay,
      nivel,
    });
  }
}
export default new ChallengeController();
