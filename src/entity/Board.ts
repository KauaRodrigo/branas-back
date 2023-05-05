export default class Board {

    estimative?: number

    constructor(readonly name: string) {
        if(name === "") throw new Error("Nome é obrigatório")
    }

}