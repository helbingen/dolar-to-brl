function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data.USDBRL.ask);
            let dolar = data.USDBRL.ask;
            document.getElementById("resultado").innerHTML = valor + " dólar = " + (dolar * valor) + " reais.";
            document.getElementById("cotacao").innerHTML = "Cotação atual: 1 Dólar americano igual a " + dolar + " Reais brasileiros.";
        })
}
