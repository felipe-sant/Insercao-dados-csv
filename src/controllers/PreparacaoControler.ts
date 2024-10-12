import { Request, Response } from 'express';
import query from '../database/db';
import lerPreparacaos from '../functions/lerPreparacao';

export default class PreparacaoControler {
    public async importar(_: Request, res: Response) {
        try {
            const preparacoes = await lerPreparacaos()
            for (const preparacao of preparacoes) {
                await query(
                    "INSERT INTO preparacao(id, pre_descricao) VALUES ($1,$2) RETURNING id",
                    [preparacao.id, preparacao.pre_descricao]
                )
            }
            res.status(200).json({ message: 'Importação realizada com sucesso' });
        } catch {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async create(req: Request, res: Response) {
        const { id, pre_descricao } = req.body;
        try {
            const r: any = await query(
                "INSERT INTO preparacao(id, pre_descricao) VALUES ($1,$2) RETURNING id",
                [id, pre_descricao]
            )
            res.status(200).json(r);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async read(_: Request, res: Response) {
        try {
            const r: any = await query(`
                SELECT id, pre_descricao
                FROM preparacao
                ORDER BY id;
            `)
            res.status(200).json(r);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async update(_: Request, res: Response) {
        try {
            const r: any = await query(`
                UPDATE preparacao SET pre_descricao=$2 WHERE id=$1    
            `)
            res.status(200).json(r);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.body;
        try {
            const r: any = await query(
                "DELETE FROM preparacao WHERE id=$1",
                [id]
            )
            res.status(200).json(r);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}