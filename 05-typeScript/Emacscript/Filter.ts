/**
 * Created by LuisVillalta on 3/6/17.
 */
//Filter

let arreglo=[{
    nombre:"Luis",
    apellido:"Villalta",
    id:1,
    nota:8

},
    {
        nombre:"Juan",
        apellido:"Rulfo",
        id:2,
        nota:5
    },
    {
        nombre:"Luis",
        apellido:"Ordoñez",
        id:3,
        nota:8.5
    },
    {
        nombre:"Charles",
        apellido:"Bukowski",
        id:4,
        nota:5.3
    }



    ];
let resultado =arreglo.filter(
    (valor,indice,arreglo)=>{
    return valor.id>3;
});
console.log(resultado);