export default class ProdPrep {
    public id: number;
    public preparacao: string;
    public energia: number;
    public proteina: number;
    public lipidio: number;
    public carboidrato: number;
    public fibra: number;
    public colesterol: number;
    public agsaturado: number;
    public agmono: number;
    public agpoli: number;
    public aglinoleico: number;
    public aglinolenico: number;
    public agtranstotal: number;
    public acucartotal: number;
    public acucaradicao: number;
    public calcio: number;
    public magnesio: number;
    public manganes: number;
    public fosforo: number;
    public ferro: number;
    public sodio: number
    public sodioadicao: number;
    public potassio: number;
    public cobre: number;
    public zinco: number;
    public selenio: number;
    public retinol: number;
    public vitamina_a: number;
    public tiamina: number;
    public riboflavina: number;
    public niacina: number;
    public niacina_ne: number;
    public piridoxina: number;
    public cobalamina: number;
    public folato: number;
    public vitamina_d: number;
    public vitamina_e: number;
    public vitamina_c: number;
    public prep_id: number;
    public prod_id: number;
    constructor (id: number, preparacao: string, energia: number, proteina: number, lipidio: number, carboidrato: number, fibra: number, colesterol: number, agsaturado: number, agmono: number, agpoli: number, aglinoleico: number, aglinolenico: number, agtranstotal: number, acucartotal: number, acucaradicao: number, calcio: number, magnesio: number, manganes: number, fosforo: number, ferro: number, sodio: number, sodioadicao: number, potassio: number, cobre: number, zinco: number, selenio: number, retinol: number, vitamina_a: number, tiamina: number, riboflavina: number, niacina: number, niacina_ne: number, piridoxina: number, cobalamina: number, folato: number, vitamina_d: number, vitamina_e: number, vitamina_c: number, prep_id: number, prod_id: number) {
        this.id = id;
        this.preparacao = preparacao;
        this.energia = energia;
        this.proteina = proteina;
        this.lipidio = lipidio;
        this.carboidrato = carboidrato;
        this.fibra = fibra;
        this.colesterol = colesterol;
        this.agsaturado = agsaturado;
        this.agmono = agmono;
        this.agpoli = agpoli;
        this.aglinoleico = aglinoleico;
        this.aglinolenico = aglinolenico;
        this.agtranstotal = agtranstotal;
        this.acucartotal = acucartotal;
        this.acucaradicao = acucaradicao;
        this.calcio = calcio;
        this.magnesio = magnesio;
        this.manganes = manganes;
        this.fosforo = fosforo;
        this.ferro = ferro;
        this.sodio = sodio;
        this.sodioadicao = sodioadicao;
        this.potassio = potassio;
        this.cobre = cobre;
        this.zinco = zinco;
        this.selenio = selenio;
        this.retinol = retinol;
        this.vitamina_a = vitamina_a;
        this.tiamina = tiamina;
        this.riboflavina = riboflavina;
        this.niacina = niacina;
        this.niacina_ne = niacina_ne;
        this.piridoxina = piridoxina;
        this.cobalamina = cobalamina;
        this.folato = folato;
        this.vitamina_d = vitamina_d;
        this.vitamina_e = vitamina_e;
        this.vitamina_c = vitamina_c;
        this.prep_id = prep_id;
        this.prod_id = prod_id;
    }
}