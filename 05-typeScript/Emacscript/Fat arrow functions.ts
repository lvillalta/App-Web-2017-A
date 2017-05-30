/**
 * Created by LuisVillalta on 29/5/17.
 */
function holaMundo(){
    console.log("Hola Mundo");
}
//funcion sin nombre, es anonymous function
let holaMundo2= function () {
    console.log("Hola Mundo");
};

//se usa las llaves para escribir bloques de codigo
let holamundo3= ()=>{
    console.log("Hola Mundo");
};
let holamundo4= ()=>console.log("Hola Mundo");
let holaMundo5= function () {
    return 5;
};
let holaMundo6=()=>5;


let holaMundo7=()=>{
    let a=2;
    return a +3;
};
//si se tiene un parametro se puede omitir los parentesis, aqui tambien se omite el return
let saludar= nombre => "Hola" +nombre;

//esto esta mal, ay que solo se emito con un parametro
//let saludar= nombre,nombre2 => "Hola" +nombre;
let saludarConApellido= (nombre,apellido)=>
Hola ${nombre} ${apellido};