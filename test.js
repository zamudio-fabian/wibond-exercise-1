var process = function (word, dic, length, start) {
    if (length === void 0) { length = 1; }
    if (start === void 0) { start = 0; }
    if (word.length < length)
        return [];
    var i = 0;
    var resp = [];
    var wordLength = word.length;
    while (word.length >= i + length) {
        var wordSearch = word.substring(i, i + length);
        if (isInDic(dic, wordSearch)) {
            resp.push(wordSearch);
        }
        else {
            var newWordA = word.substring(start, i + 1);
            if (newWordA.length >= length + 1) {
                resp = resp.concat(process(newWordA, dic, length + 1));
                start = i;
            }
        }
        i++;
    }
    if (word.length < i + length) {
        var newWordA = word.substring(start, wordLength);
        resp = resp.concat(process(newWordA, dic, length + 1));
    }
    return resp;
};
var isInDic = function (dic, word) {
    return word in dic;
};
console.log(process("aaabaa", { 'a': true, 'aa': true, 'aaa': true }));
console.log(process("aaaabaa", { 'a': true, 'aa': true, 'aaa': true }));
console.log(process("aaaba", { 'a': true, 'aa': true, 'aaa': true }));
console.log(process("aaba", { 'aa': true, 'aaa': true }));
console.log(process("aaba", { 'a': true, 'aaa': true }));
console.log(process("aaba", { 'a': true, 'aa': true }));
// Fail
console.log(process("aba", { 'a': true, 'aa': true, 'aba': true }));
