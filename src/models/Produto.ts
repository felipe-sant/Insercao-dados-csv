export default class Produto {
    public id: number
    public pro_descricao: string
    public gru_id: number
    constructor(id: number, pro_descricao: string, gru_id: number) {
        this.id = id
        this.pro_descricao = pro_descricao
        this.gru_id = gru_id
    }

    public toString(): string {
        return `${this.id} - ${this.pro_descricao}`
    }
}