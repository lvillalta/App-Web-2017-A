/**
 * Created by LuisVillalta on 29/5/17.
 */

//every es como el and y el some como el or
let arreglo = [6,9,5,6,8,9,9,3,10,10];

//Devuelve un arreglo
let resultado=arreglo.map(
    (valor,indice,arreglo)=>{
        return (valor*2)/10;

    });
//AND - Todos cumples verdadero sino falso
let resultado2=arreglo.every(
    (valor,indice,arreglo)=>{
        return (valor>=7);
    });
console.log(resultado2);

//OR - Si alguno es verdadero entonces devuelvo true
let resultado3=arreglo.some(
    (valor,indice,arreglo)=>{
        return (valor<4);
    });
console.log(resultado3);


let resultado =arreglo
    .map(
        (valor,indice,arreglo)=>{
            return (valor*2)/10);
        })
    .some(
    (valor)=>{
        return (valor<4);
    });
    )