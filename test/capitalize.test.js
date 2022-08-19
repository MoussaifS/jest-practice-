const capitalize = require('/home/duck/Desktop/Testing_Practice/code/capitalize')

test("capitalize the string", () => {
    expect(capitalize("skm")).toMatch("SKM");
    expect(capitalize("Duck")).toMatch("DUCK");
    expect(capitalize("mangO")).toMatch("MANGO");
})