function solve(a, b, c) {
    return `The largest number is ${[a, b, c].sort((a, b) => a - b).pop()}`;
}


console.log(solve(5, -3, 16))