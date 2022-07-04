async function pegarBerry() {
    /* Cria o arquivo de configuração */
    let configRequest = {
        method: "GET",
        headers: {
            "Content-type": "Application-json"
        }
    }
    try {
        let resultado = await fetch("https://pokeapi.co/api/v2/berry/1", configRequest);
        if (resultado.status == 200 || resultado.status == 201) {
            let resultadoConvertido = await resultado.json();
            console.log(resultadoConvertido);
        } else {
            console.log(resultado);
            console.log(resultado.status);
            throw resultado
        }
    } catch (error) {
        console.log(error);
    }
}