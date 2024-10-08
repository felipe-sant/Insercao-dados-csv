import { Router } from 'express';
import ProdPrepControler from '../controllers/ProdPrepControler';

const routes = Router();
const controller = new ProdPrepControler();

routes.post('/prodPrep', controller.create);
routes.get('/prodPrep', controller.read);
routes.delete('/prodPrep', controller.delete);
routes.put('/prodPrep', controller.update);

export default routes;