import { Request, Response } from 'express'
import query from '../database/db'

export default class GrupoControler {
    public async create(req: Request, res: Response) {
        const { id, gru_descricao } = req.body
        try {
            const r: any = await query(
                "INSERT INTO grupo(id, gru_descricao) VALUES ($1,$2) RETURNING id",
                [id, gru_descricao]
            )
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async read(req: Request, res: Response) {
        try {
            const r: any = await query(`
                SELECT id, gru_descricao
                FROM grupo
                ORDER BY id;
            `)
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async update(req: Request, res: Response) {
        const { id, gru_descricao } = req.body
        try {
            const r: any = await query(
                "UPDATE grupo SET gru_descricao=$2 WHERE id=$1", [id, gru_descricao]
            )
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.body
        try {
            const r: any = await query(
                "DELETE FROM grupo WHERE id = $1", [id]
            )
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}