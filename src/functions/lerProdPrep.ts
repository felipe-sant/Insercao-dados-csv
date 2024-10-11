import readline from "node:readline";
import fs from "fs";
import ProdPrep from "../models/ProdPrep";

export default async function lerProdPreps(): Promise<ProdPrep[]> {
    const prodPreps: ProdPrep[] = [];

    const rl = readline.createInterface({
        input: fs.createReadStream("./csv/Taco-ProdPrep.csv"),
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

            const [id, preparacao, energia, proteina, lipidio, carboidrato, fibra, colesterol, agsaturado, agmono, agpoli, aglinoleico, aglinolenico, agtranstotal, acucartotal, acucaradicao, calcio, magnesio, manganes, fosforo, ferro, sodio, sodioadicao, potassio, cobre, zinco, selenio, retinol, vitamina_a, tiamina, riboflavina, niacina, niacina_ne, piridoxina, cobalamina, folato, vitamina_d, vitamina_e, vitamina_c, prep_id, prod_id] = line.split(";");
            const prodPrepObj = new ProdPrep(parseFloat(id), preparacao, parseFloat(energia), parseFloat(proteina), parseFloat(lipidio), parseFloat(carboidrato), parseFloat(fibra), parseFloat(colesterol), parseFloat(agsaturado), parseFloat(agmono), parseFloat(agpoli), parseFloat(aglinoleico), parseFloat(aglinolenico), parseFloat(agtranstotal), parseFloat(acucartotal), parseFloat(acucaradicao), parseFloat(calcio), parseFloat(magnesio), parseFloat(manganes), parseFloat(fosforo), parseFloat(ferro), parseFloat(sodio), parseFloat(sodioadicao), parseFloat(potassio), parseFloat(cobre), parseFloat(zinco), parseFloat(selenio), parseFloat(retinol), parseFloat(vitamina_a), parseFloat(tiamina), parseFloat(riboflavina), parseFloat(niacina), parseFloat(niacina_ne), parseFloat(piridoxina), parseFloat(cobalamina), parseFloat(folato), parseFloat(vitamina_d), parseFloat(vitamina_e), parseFloat(vitamina_c), parseInt(prep_id), parseInt(prod_id));
            prodPreps.push(prodPrepObj);
        });

        rl.on("close", () => {
            resolve(prodPreps);
        });

        rl.on("error", (err) => {
            reject(err);
        });
    });
}