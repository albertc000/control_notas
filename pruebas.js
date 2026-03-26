//pruebas

const prompt = require("prompt-sync")();
const readline = require('readline-sync');
const {Estudiantes} = require("./claseEstudiantes.js");
let BDEstudiantes = new Estudiantes("baseDatosEstudiantes.json");
const {Maestro} = require("./claseEstudiantes.js");
let BDMaestros = new Maestro("baseDatosMaestros.json");


/*
let cedula = prompt("cedula: ");
console.log(BDEstudiantes.existeAlumno(cedula))

BDEstudiantes.registrarMatematica(cedula);
BDEstudiantes.cerrarBD();
*/

let cedula = prompt("cedula: ");
let nombre = prompt("nombre: ");
let apellido = prompt("apellido: ");
let materia = prompt("materia: ");
BDMaestros.registrarMaestro(cedula, nombre, apellido, materia);
BDMaestros.cerrarBD();