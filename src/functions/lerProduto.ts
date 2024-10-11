import readline from "node:readline";
import fs from "fs";
import Produto from "../models/Produto";

export default async function lerProdutos(): Promise<Produto[]> {
    const produtos: Produto[] = [];

    const rl = readline.createInterface({
        input: fs.createReadStream("./csv/Taco-Produto.csv"),
        output: process.stdout,
        terminal: false
    });

    let isFirstLine = true;

    return new Promise((resolve, reject) => {
        rl.on("line", (line) => {
            if (isFirstLine) {
                isFirstLine = false;
                return;
            }

            const [id, pro_descricao, gru_id] = line.split(";");
            const produtoObj = new Produto(parseInt(id), pro_descricao, parseInt(gru_id));
            produtos.push(produtoObj);
        });

        rl.on("close", () => {
            resolve(produtos);
        });

        rl.on("error", (err) => {
            reject(err);
        });
    });
}