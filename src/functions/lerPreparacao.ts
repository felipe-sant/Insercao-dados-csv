import readline from "node:readline";
import fs from "fs";
import Preparacao from "../models/Preparacao";

export default async function lerPreparacaos(): Promise<Preparacao[]> {
    const preparacoes: Preparacao[] = [];

    const rl = readline.createInterface({
        input: fs.createReadStream("./csv/Taco-Preparacao.csv"),
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

            const [id, preparacao] = line.split(";");
            const preparacaoObj = new Preparacao(parseInt(id), preparacao);
            preparacoes.push(preparacaoObj);
        });

        rl.on("close", () => {
            resolve(preparacoes);
        });

        rl.on("error", (err) => {
            reject(err);
        });
    });
}