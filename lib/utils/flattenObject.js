const flattenObject = (input, keyName) => {
var result = {};
for (const key in input) {
 const newKey =  keyName ? `${keyName}_${key}` : key;
 if (Object.prototype.toString.call(input[key]) === '[object Object]') {
       result = {...result, ...flattenObject(input[key], newKey)}
 } else {
       result[newKey] = input[key];
 }
}
return result;
};

export default flattenObject;