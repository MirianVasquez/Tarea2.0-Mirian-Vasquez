

const calcularPromedioNotas = ({nombre, notas:[a,b,c,d]}) => {
    
    const promedio = (a+b+c+d)/4
    return console.log('Nombre:', nombre, 'Promedio de notas:', promedio)
}

console.log(calcularPromedioNotas({nombre:'Juan', notas:[80, 90, 100, 90]}))
console.log(calcularPromedioNotas({nombre:'Maria', notas:[90, 83, 80, 90]}))
console.log(calcularPromedioNotas({nombre:'Carmen', notas:[100, 90, 100, 90]}))
