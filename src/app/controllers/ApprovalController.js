import * as Yup from 'yup';
import Approval from '../models/Approval';
import Challenge from '../models/Challenge';

class ApprovalController {
  async update(req, res) {
    const schema = Yup.object().shape({
      status: Yup.boolean(),
      aprovado: Yup.boolean(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'error validation fails' });
    }
    const approval = await Approval.findByPk(req.params.id);
    const { id, status, id_challenges, aprovado } = await approval.update(
      req.body
    );
    const challenge = await Challenge.findByPk(id_challenges);
    if (!aprovado) {
      return res.json('Não foi aceito seu desafio tente novamente');
    }
    const nivel = challenge.nivel + 1;

    await challenge.update({ nivel });
    return res.json({
      id,
      status,
      id_challenges,
    });
  }
}
export default new ApprovalController();
