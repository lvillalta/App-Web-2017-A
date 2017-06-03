/**
 * Created by LuisVillalta on 3/6/17.
 */
var UsuarioClass = (function () {
    /* se puede omitir este paso
     public nombre: string;
     private apellido: string;
 */
    function UsuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /* se puede omitir por TypeScript
        this.nombre = nombre;
          this.apellido = apellido;
          */
    }
    UsuarioClass.prototype.ImprimirNombre = function (saludo, titulo) {
        return "\n        " + saludo + ", " + titulo + "\n        " + this.nombre + " " + this.apellido + "\n        ";
    };
    return UsuarioClass;
}());
var luis = new UsuarioClass("Luis", "Villalta");
console.log(luis.ImprimirNombre("Hi", "Sr."));
