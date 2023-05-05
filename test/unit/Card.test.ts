import Card from "../../src/entity/Card"

test('Deve criar um cartão', function() {
    const card = new Card("Atividade 1", 3)
    expect(card.title).toBe("Atividade 1")
    expect(card.estimative).toBe(3)
})

test('Não deve criar um cartão sem um título', function() {
    expect(() => new Card("", 3)).toThrow(new Error("Título é obrigatório"))
})

test('Não deve criar cartão com estimativa negativa', function() {
    expect(() => new Card("Atividade 1", -2)).toThrow("Estimativa deve ser positiva")
})