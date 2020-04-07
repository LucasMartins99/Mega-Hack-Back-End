import { Router } from 'express';
import UserController from './app/controllers/UserController';
import ChallengeController from './app/controllers/ChallengeController';
import ApprovalController from './app/controllers/ApprovalController';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/challenges/:id', ChallengeController.update);
routes.put('/approvals/:id', ApprovalController.update);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
export default routes;
