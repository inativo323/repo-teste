const { returnTrue } = require("./index")

describe('Teste 01', () => {
    it('Deve retornar true', () => {
        expect(returnTrue()).toEqual(true)
    })
})