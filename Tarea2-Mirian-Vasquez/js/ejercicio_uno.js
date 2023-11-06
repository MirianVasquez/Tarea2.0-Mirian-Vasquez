function contarPalabras(texto) {
    const palabras = texto.split(/\s/);

    const soloPalabras = palabras.filter(palabra => palabra.trim() !== '');
  
    return soloPalabras.length;


  } 


  const cantidadPalabras = contarPalabras(texto='Implementa la función contarPalabras, que reciba un texto y devuelva la cantidad de palabras que contiene. ');
  console.log('La cantidad de palabras que contiene el texto es:',cantidadPalabras);
  
