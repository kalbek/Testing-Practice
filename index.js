const stringLength = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++){
        count++;
    }
    return count;
}
let length =  stringLength("microverse")
console.log(length)