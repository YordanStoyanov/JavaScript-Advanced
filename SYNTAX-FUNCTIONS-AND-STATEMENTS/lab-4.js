function solve(a, b, c) {
    return `The largest number is ${[a, b, c].
        sort((a, b) => a - b).
        pop()}`;
}

console.log(solve(5, -3, 16))

function solve2(...params) {
    //return `The largest number is ${[...params].sort().pop()}`;
    return `The largest number is ${[...params].
        sort((a, b) => a - b).//(a, b) => a - b is sort acending and (a, b) => b - a is desending
        pop()}`;
    //return `The largest number is ${[Math.max(...params)]}`
}

console.log(solve2(5, 3, -2, 2))