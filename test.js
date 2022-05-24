// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


const { fromEuroToDollar } = require('./app.js');

test('5 euros deberían ser 6 dólares', () => {
    let euroAdolar = fromEuroToDollar(5)

    expect(euroAdolar).toBe(6);
});

const { fromDollarToYen } = require('./app.js');

test('7 Dolares deberían ser 746 Yenes', () => {
    let dolarAyen = Math.floor(fromDollarToYen(7))

    expect(dolarAyen).toBe(746);
});

test('el resultado de "fromDollarToYen" debe ser un entero', () => {
    let entero = Math.floor(fromDollarToYen(7));

    expect(Number.isInteger(entero)).toBe(true);
});

const { fromYanToPound } = require('./app.js');

test('200 Yenes debería ser 1 libra', () => {
    let yenAlibra = Math.floor(fromYanToPound(200))

    expect(yenAlibra).toBe(1);
});