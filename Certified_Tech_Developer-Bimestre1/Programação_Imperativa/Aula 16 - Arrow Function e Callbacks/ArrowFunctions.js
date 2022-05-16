let horaAtual = () => {
    let data = new Date()
    return data.getHours() + ':' + data.getMinutes();
}

console.log(horaAtual());