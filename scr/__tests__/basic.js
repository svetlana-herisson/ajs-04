// test(description, work) // description - описание, 
                        // work - функция какой-то работы

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4); // expect - функция для сравнения значений друг с другом
});


/*  по стандарту commonJS

const { calculateTotal } = require('../calculate.js');
*/

// import/export

import { calculateTotal } from "../calculate.js";

test('calculateTotal sum without discont', () => {
    const list = [
        {
            id: 456,
            name: 'Война и мир',
            count: 3,
            price: 400,
        },
        {
            id: 55,
            name: 'javaScript',
            count: 1,
            price: 1300,
        }
    ]
    const result = calculateTotal(list);
    expect(result).toBe(2500);
});

test('calculateTotal sum with discont', () => {
    const list = [
        {
            id: 456,
            name: 'Война и мир',
            count: 3,
            price: 401,
        },
        {
            id: 55,
            name: 'javaScript',
            count: 1,
            price: 1300,
        }
    ]
    const result = calculateTotal(list, true);
    expect(result).toBeCloseTo(2230.173); // очень много вариантов 
    // проверки. Надо смотреть на сайте JEST. 
    // toBeCloseTo - приблизительное значение
});