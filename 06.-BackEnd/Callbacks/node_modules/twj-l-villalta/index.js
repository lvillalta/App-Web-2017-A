/**
 * Created by LuisVillalta on 5/6/17.
 */
//index.js
let Passwords=require('machinepack-passwords');
//se importa todo elpaquete en la variable Passwords
exports.calculadoraUdla={
    sumar:(n1,n2)=>{
        return n1+n2;
    },
    restar:(n1,n2)=>{
        return n1-n2;
    },
    multiplicar:(n1,n2)=>{
        return n1*n2;
    },
    passwords:Passwords
};