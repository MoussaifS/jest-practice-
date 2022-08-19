
const cipher = require('../code/caesarCipher');

test("caesarCipher", () => {
    expect(cipher("defend the east wall of the castle")).toMatch("efgfoe uif fbtu xbmm pg uif dbtumf");
})

