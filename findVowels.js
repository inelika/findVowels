function findVowels (string){
    let vowels = ['a', 'e', 'i', 'u', 'o']
    let count = []
    for (let i = 0; i <string.length; i++ ){
      if( vowels.includes(string[i])){
        count++
      }
    }
    return count;
}
console.log(findVowels ('tima'));
console.log(findVowels ('elizia'));
console.log(findVowels ('apple'));
console.log(findVowels ('polilikasiania'));
console.log(findVowels ('dinosaur'));
console.log(findVowels ('werryng'));
