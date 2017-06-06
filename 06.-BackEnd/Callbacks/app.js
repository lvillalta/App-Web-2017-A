/**
 * Created by LuisVillalta on 3/6/17.
 */
const fs = require('fs');
const express = require('express');
/*
const calculadora = require('twj-l-villalta');
//const Passwords=require('machinepack-passwords');
let a =2,
b=3,
resultado;
resultado =calculadora.calculadoraUdla.sumar(a,b);
console.log(`Resultado es: ${resultado}`);
console.log("Empieza");
let passwordAEncriptar = "1234";
calculadora.calculadoraUdla.passwords.encryptedPassword(
//Passwords.encryptPassword(
    {
        password: passwordAEncriptar,
    }).
exec({
    error: (error)=>{
        console.log(`Error: ${error}`);
    },
    success: (resultado)=>{
        console.log(`Resultado: ${resultado} `);
    },
    });

*/
/*
Recibe tres parametros
1.-Nombre y ruta del archivo
2.-Codificacion
3.-Anonymous Function(error!, contenido del archivo)
 */
fs.readFile('texto.txt','utf8',
    function(err, data) {
    if (err) throw err;
console.log(data);
});
console.log("Termina");