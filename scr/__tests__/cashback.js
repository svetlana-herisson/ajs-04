import calculateCashback from "../cashback.js"

test("cashback at sum: 500", () => {
    const result = calculateCashback(500);
    expect(result).toBe(0)
}); // проверка что скидки нет



test.each([
    ["gold", 100000, 5000], // эти параметры будут передаваться в функцию handler 
    ["silver", 10000, 200],
    ["regular", 1000, 10],
    ["no", 500, 0],
])("testing cashback function with %status and %i amount ", (_, amount, expected) => {
    const result = calculateCashback(amount);

    expect(result).toBe(expected)
}); // _ - неиспльзуемый элемент 