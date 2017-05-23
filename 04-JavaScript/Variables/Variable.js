/**
 * Created by LuisVillalta on 22/5/17.
 */
var texto="";
var texto2='';
var numero=1;
var booleano=false;
var decimal= 1.2;
var fecha = new Date();
var objeto={};
texto=2;
texto=booleano;
texto= decimal;
texto= fecha;
texto=objeto;

//Comentario en linea

/*
Comentario en bloque
 */

//Arreglos
var arregloNumeros=[1,2,3,4,5];
var arregloStrings=["a","b","c"];
var arregloBooleanos=[true,false,true];
arregloNumeros=[1,"a",true,[1,"b"],{}];
var matriz=[[1,2],[3,4]];
//   0 1
// 0 1 2
// 1 3 4

//Objeto JSON
var objetoNotacion ={};
var objeto2={
    llave:"valor",
    llave2:"valor2",
    llave3:"valor3",//se puede dejar o no una coma ,


};
objeto2.llave; //valor
objeto2.llave2; //valor
objeto2.llave3; //valor

var objetoComplejo{
  nombre:"",
      apellido:"",
        fechaNacimiento: new Date(),
        mayorEdad:true,
        peso:70.2,
        altura:127,
        saltar:function () {
        console.log("Saltar");
    },
    titulo:function(){

    },
    correr:function(){
      console.log("Correr")

    },
    sumar:function(a,b){
        return a+b;
    }
    imprimirnombre:function(){
 //       return objetoComplejo.nombre + " " + objetoComplejo.apellido;
   return this.nombre + " " +this.apellido;
    }
};
objetoComplejo.altura; //""127
objetoComplejo.apellido; //""
objetoComplejo.nombre; //""
objetoComplejo.nombre="Luis";
objetoComplejo.nombre; //Luis
objetoComplejo.apellido="Villalta";
objetoComplejo.apellido; //Villalta


objetoComplejo.titulo ="Ingeniero";
//no hacer, ya que da un error en el nivel porque se esta accediendo a un nivel que no existe
objetoComplejo.titulo.fechaExpedicion = "";

//borra la propiedad nombre
delete objetoComplejo.nombre;


var arregloStrings = ["1","2"];
//agregar elementos a un arreglo
arregloStrings.push("3"); // ["1","2","3"]
arregloStrings.pop(); //["1","2"]


//["1","3","2"]
arregloStrings.splice(1,0,3);
//["3","2"]