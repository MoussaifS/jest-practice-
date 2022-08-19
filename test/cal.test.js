const calculator = require('../code/cal');

test("check the calculator add , subtaract , divide and multiply", () =>{
    expect(calculator.add(6,2)).toBe(8);
    expect(calculator.subtract(6,2)).toBe(4);
    expect(calculator.divide(6,2)).toBe(3);
    expect(calculator.multiply(6,2)).toBe(12);
})