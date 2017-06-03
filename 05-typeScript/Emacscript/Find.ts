/**
 * Created by LuisVillalta on 3/6/17.
 */
let arreglo=[{
    nombre:"Luis",
    apellido:"Villalta",
    id:1

},
    {
        nombre:"Juan",
        apellido:"Rulfo",
        id:2
    },
    {
        nombre:"Luis",
        apellido:"Ordoñez",
        id:3
    }];

//devuelve el primero que encuentra
//*devuleve la primera instancia en el arreglo segun un criterio de busqueda
arreglo.find(function(value){
    return value.apellido=="Rulfo"
} );