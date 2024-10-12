import { Router } from "express";
import GrupoControler from "../controllers/GrupoControler";

const routes = Router()
const controller = new GrupoControler()

routes.post('/grupo/importar', controller.importar)
routes.post('/grupo', controller.create)
routes.get('/grupo', controller.read)
routes.delete('/grupo', controller.delete)
routes.put('/grupo', controller.update)

export default routes