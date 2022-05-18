export function somar(numParam1, numParam2) {
    if (isNaN(numParam1) || isNaN(numParam2)) {
        return "Insira um número valido"
    } else {
        let total = numParam1 + numParam2
        return total
    }
}