function solve(...params) {
    let sum = params.reduce((a, b) => a + b.length, 0);
    let average = Math.floor(sum / params.length);
    return [sum, average]
}

console.log(
    solve('chocolate', 'ice cream', 'cake').join('\n')
)

