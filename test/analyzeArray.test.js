
let analyzeArray = require('../code/analyzeArray')

test("analyze the array lenght average max and min",() => {
    let array = [1,8,3,4,2,6] 
    expect(analyzeArray(array)).toEqual({
        avg: 4,
        min: 1,
        max: 8,
        length: 6
      });
    
})