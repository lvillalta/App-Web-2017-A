/**
 * Created by LuisVillalta on 29/5/17.
 */
var arreglo = [4, 9, 5, 6, 8, 9, 9, 3, 4, 5];
//Devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
console.log(resultado);
