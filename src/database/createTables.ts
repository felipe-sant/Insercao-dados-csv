import query from "./db"

async function CreateGrupo() {
    const r: any = await query(`
        CREATE TABLE grupo (
            id SERIAL PRIMARY KEY,
            gru_descricao VARCHAR(255) NOT NULL
        );
    `)
    return r
}

async function CreatePreparacao() {
    const r: any = await query(`
        CREATE TABLE preparacao (
            id SERIAL PRIMARY KEY,
            pre_descricao VARCHAR(255) NOT NULL
        );
    `)
    return r
}

async function CreateProdPrep() {
    const r: any = await query(`
        CREATE TABLE prod_prep (
            id SERIAL PRIMARY KEY,
            preparacao VARCHAR(255) NOT NULL,
            energia FLOAT,
            proteina FLOAT,
            lipidio FLOAT,
            carboidrato FLOAT,
            fibra FLOAT,
            colesterol FLOAT,
            agsaturado FLOAT,
            agmono FLOAT,
            agpoli FLOAT,
            aglinoleico FLOAT,
            aglinolenico FLOAT,
            agtranstotal FLOAT,
            acucartotal FLOAT,
            acucaradicao FLOAT,
            calcio FLOAT,
            magnesio FLOAT,
            manganes FLOAT,
            fosforo FLOAT,
            ferro FLOAT,
            sodio FLOAT,
            sodioadicao FLOAT,
            potassio FLOAT,
            cobre FLOAT,
            zinco FLOAT,
            selenio FLOAT,
            retinol FLOAT,
            vitamina_a FLOAT,
            tiamina FLOAT,
            riboflavina FLOAT,
            niacina FLOAT,
            niacina_ne FLOAT,
            piridoxina FLOAT,
            cobalamina FLOAT,
            folato FLOAT,
            vitamina_d FLOAT,
            vitamina_e FLOAT,
            vitamina_c FLOAT,
            prep_id INTEGER,
            prod_id INTEGER
        )
    `)
    return r
}


async function CreateProduto() {
    const r: any = await query(`
        CREATE TABLE produto (
            id SERIAL PRIMARY KEY,
            pro_descricao VARCHAR(255) NOT NULL,
            gru_id INTEGER
        );
    `)
    return r
}

async function main() {
    console.log(await CreateGrupo())
    console.log(await CreatePreparacao())
    console.log(await CreateProdPrep())
    console.log(await CreateProduto())
}

main()