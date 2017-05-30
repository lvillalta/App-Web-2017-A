/**
 * Created by LuisVillalta on 29/5/17.
 */
//every es como el and y el some como el or
var arreglo = [6, 9, 5, 6, 8, 9, 9, 3, 10, 10];
//Devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
//AND - Todos cumples verdadero sino falso
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor > 2);
});
console.log(resultado2);
