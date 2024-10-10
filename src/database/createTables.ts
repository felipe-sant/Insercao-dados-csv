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

CreateGrupo()