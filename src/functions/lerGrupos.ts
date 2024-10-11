import readline from "node:readline";
import fs from "fs";
import Grupo from "../models/Grupo";

export default async function lerGrupos(): Promise<Grupo[]> {
    const grupos: Grupo[] = [];

    const rl = readline.createInterface({
        input: fs.createReadStream("./csv/Taco-Grupo.csv"),
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

            const [id, grupo] = line.split(";");
            const grupoObj = new Grupo(parseInt(id), grupo);
            grupos.push(grupoObj);
        });

        rl.on("close", () => {
            resolve(grupos);
        });

        rl.on("error", (err) => {
            reject(err);
        });
    });
}
