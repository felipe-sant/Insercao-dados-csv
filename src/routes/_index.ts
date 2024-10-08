import { Router, Request, Response } from "express";
import grupo from "./grupo";
import preparacao from "./preparacao";
import prodPrep from "./prodPrep";
import produto from "./produto";

const routes = Router()

routes.use('/', grupo)
routes.use('/', preparacao)
routes.use('/', prodPrep)
routes.use('/', produto)

routes.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Not found' })
})

export default routes