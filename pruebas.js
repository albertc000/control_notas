//pruebas

const prompt = require("prompt-sync")();
const readline = require('readline-sync');
const {Estudiantes} = require("./clasesFunciones.js")
let BDEstudiantes = new Estudiantes("baseDatosEstudiantes.json");


let cedula = Number(prompt("cedula: "))
console.log(BDEstudiantes.existeAlumno(cedula))

BDEstudiantes.registrarMatematica(cedula);
BDEstudiantes.cerrarBD();