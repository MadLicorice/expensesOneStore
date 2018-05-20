const myArray = [[[[[[['some value']]]]]]]

const unwrap = (val) => Array.isArray(val) ? unwrap(val[0]) : val;

unwrap(myArray);