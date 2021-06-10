const process = ( word: string, dic: Record<string,boolean>, length:number = 1, start:number = 0): string[] => {
  if(word.length < length) return [];
  let i = 0
  let resp = []
  let wordLength = word.length;
  while (word.length >= i + length) {
    const wordSearch = word.substring(i, i + length)
    if(isInDic(dic, wordSearch)){
        resp.push(wordSearch)
    }else{
      let newWordA = word.substring(start, i + 1)
      if(newWordA.length >= length + 1){
        resp = resp.concat(process(newWordA, dic, length + 1))
        start = i
      }
    }
    i++
  }
  if(word.length < i + length){
    let newWordA = word.substring(start, wordLength)
    resp = resp.concat(process(newWordA, dic, length + 1))
  }
  return resp
}

const isInDic = (dic:Record<string,boolean>, word: string): boolean => {
    return word in dic;
}

console.log( process("aaabaa", {'a': true,'aa': true,'aaa': true} ));

console.log( process("aaaabaa", {'a': true,'aa': true,'aaa': true} ));

console.log( process("aaaba", {'a': true,'aa': true,'aaa': true} ));

console.log( process("aaba", {'aa': true,'aaa': true} ));

console.log( process("aaba", {'a': true,'aaa': true} ));

console.log( process("aaba", {'a': true,'aa': true} ));

// Fail
console.log( process("aba", {'a': true,'aa': true,'aba': true} ));