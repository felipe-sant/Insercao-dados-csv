export default class Preparacao {
    public id: number;
    public pre_descricao: string;
    constructor(id: number, pre_descricao: string) {
        this.id = id;
        this.pre_descricao = pre_descricao;
    }

    public toString(): string {
        return `${this.id} - ${this.pre_descricao}`;
    }
}