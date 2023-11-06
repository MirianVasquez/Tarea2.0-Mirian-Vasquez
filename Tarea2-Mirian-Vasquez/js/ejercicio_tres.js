function encontrarDuplicados(numeros) {
    const numerosDuplicados = []
    const contador = {};

    for (let i=0; i < numeros.length; i++){

        if (numeros.slice(i+1).includes(numeros[i])){
            numerosDuplicados.push(numeros[i]);
        }
    }
    return numerosDuplicados 
}

console.log(encontrarDuplicados(numeros = [1,2,3,98,10,6,4,7,88,2,3,88,8]))

