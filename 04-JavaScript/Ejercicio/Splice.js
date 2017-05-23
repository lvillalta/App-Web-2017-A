/**
 * Created by LuisVillalta on 22/5/17.
 */
var arregloStrings = ["1","2"];
//agregar elementos a un arreglo
arregloStrings.push("3"); // ["1","2","3"]
arregloStrings.pop(); //["1","2"]


//["1","3","2"]
arregloStrings.splice(1,0,3);
console.log(arregloStrings);
//["3","2"]
arregloStrings.splice(0,1);

console.log(arregloStrings);