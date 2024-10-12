import { Request, Response } from 'express'
import query from '../database/db'
import lerProdutos from '../functions/lerProduto'

export default class ProdutoControler {
    public async importar(req: Request, res: Response) {
        try {
            const produtos = await lerProdutos()
            for (const produto of produtos) {
                await query(
                    "INSERT INTO produto(id, pro_descricao, gru_id) VALUES ($1,$2,$3) RETURNING id",
                    [produto.id, produto.pro_descricao, produto.gru_id]
                )
            }
            res.status(200).json({ message: 'Importação realizada com sucesso' })
        } catch {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async create(req: Request, res: Response) {
        const { id, pro_descricao, gru_id } = req.body
        try {
            const r: any = await query(
                "INSERT INTO produto(id, pro_descricao, gru_id) VALUES ($1,$2,$3) RETURNING id",
                [id, pro_descricao, gru_id]
            )
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async read(_: Request, res: Response) {
        try {
            const r: any = await query(`
                SELECT id, pro_descricao, gru_id
                FROM produto
                ORDER BY id;
            `)
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async update(_: Request, res: Response) {
        try {
            const r: any = await query(`
                UPDATE produto SET pro_descricao=$2, gru_id=$3 WHERE id=$1    
            `)
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.body
        try {
            const r: any = await query(
                "DELETE FROM produto WHERE id=$1",
                [id]
            )
            res.status(200).json(r)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}