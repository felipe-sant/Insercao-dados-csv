import { Request, Response } from 'express';

export default class PreparacaoControler {
    public async create(req: Request, res: Response) {
        try {
            res.json({ message: 'create' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async read(req: Request, res: Response) {
        try {
            res.json({ message: 'read' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            res.json({ message: 'update' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            res.json({ message: 'delete' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}