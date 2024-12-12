function calculaTabuada() {
    //Obtendo elementos da DOM
    let tabuada = document.querySelector("#tabuada tbody");
    let valorA = document.querySelector("#valorA");

    //Validando Inputs
    if(valorA.value.length == 0){
        window.alert("Por favor digite um numero valido");
        return;
    }

    let numero = parseInt(valorA.value);
}