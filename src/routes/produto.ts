import { Router } from "express";
import ProdutoControler from "../controllers/ProdutoControler";

const routes = Router()
const controller = new ProdutoControler()

routes.post('/produto/importar', controller.importar)
routes.post('/produto', controller.create)
routes.get('/produto', controller.read)
routes.delete('/produto', controller.delete)
routes.put('/produto', controller.update)

export default routes