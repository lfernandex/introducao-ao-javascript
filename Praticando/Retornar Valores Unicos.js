const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    /*return mySet;*/  /* Nos retorna um set, mesmo sendo com valores unicos, a proposta da atividade é 
     retornar um array*/
    return [...mySet]; /*nos retorna um array, utilizado a técnica spred os elementos do set se tornam
     um array*/
}

console.log(valoresUnicos(meuArray));