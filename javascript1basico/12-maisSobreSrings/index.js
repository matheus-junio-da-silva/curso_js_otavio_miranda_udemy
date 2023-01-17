//               01
let umaString = "um \"texto\"";
umaString = "um texto";
console.log(umaString)
console.log(umaString[4])
console.log(umaString.charAt(4))
console.log(umaString.concat(' ', 'em', ' ', 'um',' ','lindo dia'))
console.log(`${umaString} em um lindo dia`)
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('m', 3))
console.log(umaString.search(/x/))
console.log(umaString.replace('um','outra'))
let travaLingua = 'o rato roeu a roupa do rei de roma'

console.log(travaLingua.replace(/r/g, '#'))
console.log(travaLingua.slice(2, 6))
console.log(travaLingua.slice(-3))
console.log(travaLingua.slice(-4, travaLingua.length -1))
console.log(travaLingua.split(' '))
console.log(travaLingua.split(' ', 2))
console.log(travaLingua.toUpperCase())