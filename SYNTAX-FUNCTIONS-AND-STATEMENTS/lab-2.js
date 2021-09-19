const operationsMar = {
    "+": Add,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "%": (a, b) => a % b,
}
function Add(x, y){
    return x + y;
}
function solve(operator, ...rest) {
    return rest
    .reduce(
        (a, b) => operationsMar[operator](
            a, Number(b)
        ),
        Number(rest.shift())
        );
}

console.log(
    solve("+", 1, 2)
)