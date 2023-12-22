'use strict'
function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
  
    this.validaPromedio = function() {
      return this.promedio > 70 ? "Aprobado" : "Reprobado";
    };
  

    this.obtenerUsuario = function() {

      return this.correo.split('@')[0];
    };
  }
  
  let studentOne = new Student("Juan Pérez", "juan@example.com", 75);
  alert(studentOne.validaPromedio());
  alert(studentOne.obtenerUsuario());
  