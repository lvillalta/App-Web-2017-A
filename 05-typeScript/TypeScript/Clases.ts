/**
 * Created by LuisVillalta on 3/6/17.
 */
class UsuarioClass {
   /* se puede omitir este paso
    public nombre: string;
    private apellido: string;
*/
    constructor(public nombre: string,
                private apellido?: string,)
    {
  /* se puede omitir por TypeScript
  this.nombre = nombre;
    this.apellido = apellido;
    */
    }

    ImprimirNombre(saludo:string, titulo?:string):string{
        return `
        ${saludo}, ${titulo}
        ${this.nombre} ${this.apellido}
        `;
    }

}
let luis:UsuarioClass= new UsuarioClass(
    "Luis",
    "Villalta");
console.log(luis.ImprimirNombre("Hi","Sr."));