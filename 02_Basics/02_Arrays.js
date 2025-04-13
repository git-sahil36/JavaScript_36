const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','batman','flash']
marvel_heros.push(dc_heros)

console.log(marvel_heros);

// Concat Operator
 const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);

// Spread operator (Spreads each array element to singuilar seperate element)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);
