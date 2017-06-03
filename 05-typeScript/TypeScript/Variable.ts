/**
 * Created by LuisVillalta on 3/6/17.
 */
let numero: number = 2;
//nombreVariable:tipoVariable
let bandera: boolean = true;
//bandera =0; nio se puede igualar a un valor que no sea boleano
bandera = null;
bandera = undefined;
bandera = false;
let nombre: string = "Luis";
nombre = `Yo no soy ${bandera}`;
//let arregloNumeros:number = [1,2]; no se puede asignar de esta manera un arreglo
let arregloNumeros1: number[] = [1, 2];
let arregloNumeros2: Array<number> = [1, 2];
//el signo de interrogacion es con datos opcionales, es decir que pueden estar avcios
interface UsuarioInt {
    nombre: string,
    apellido: string,
    nota?: number,
    id: number
}
let luis:UsuarioInt={
    nombre:"Luis",
    apellido:"Villalta",
    nota:25,
    id:21
};

var juego= {};
juego=2;
juego="string";

//el any sirve para transformar el dato a una variable cualquiera de typescript
let juego:any=2;
juego="Nombre";
juego={};
//sin el any da error porque el compilador asume que se le asigno el tipo de dao numero
//let juego=2;
//juego="Nombre";
//juego={};

//la constante no cambiad e valor
const amigo="Amigo";
const numero=2;
/*numero=25;
amigo ="Referendum";
*/
