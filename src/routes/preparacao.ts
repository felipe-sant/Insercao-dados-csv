import { Router } from "express";
import PreparacaoControler from "../controllers/PreparacaoControler";

const routes = Router()
const controller = new PreparacaoControler()

routes.post('/preparacao', controller.create)
routes.get('/preparacao', controller.read)
routes.delete('/preparacao', controller.delete)
routes.put('/preparacao', controller.update)

export default routes