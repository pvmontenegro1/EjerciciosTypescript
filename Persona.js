var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Buenas tardes mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
var persona1 = new Persona('Guillermo', 30); // Se crea un objeto de la clase Persona
persona1.saludar();
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, salario) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.trabajar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atendiendo a los clientes y su salario\n     es ").concat(this.salario));
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado('Pedro', 35, 2000);
empleado1.trabajar(); // Pedro está trabajando.
