export default class Grupo {
    public id: number;
    public gru_descricao: string;
    constructor(id: number, gru_descricao: string) {
        this.id = id;
        this.gru_descricao = gru_descricao;
    }

    public toString(): string {
        return `Grupo: ${this.id} - ${this.gru_descricao}`;
    }
}