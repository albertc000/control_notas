//clases y funciones

const fs = require("fs");
const prompt = require("prompt-sync")();
const readline = require('readline-sync');

class Alumno {
    cedula;
    nombre;
    apellido;
    notas;
    matematica;
    biologia;
    quimica;
    fisica;
    ingles;
    castellano;

    constructor(cedula, nombre, apellido, notas=[0,0,0,0], matematica=[0,0,0,0], biologia=[0,0,0,0], quimica=[0,0,0,0], fisica=[0,0,0,0], ingles=[0,0,0,0], castellano=[0,0,0,0]){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = notas;
        this. matematica = matematica;
        this.biologia = biologia;
        this.quimica = quimica;
        this.fisica = fisica;
        this.ingles = ingles;
        this.castellano = castellano;
    }
}

class Estudiantes {
    
    #listaEstudiantes = [];
    #JsonName = "";

    constructor(JsonName){
        this.#JsonName = JsonName;
        if (fs.existsSync(JsonName)) {
            const dataBase = fs.readFileSync(JsonName, "utf8");
            const data = JSON.parse(dataBase).listaEstudiantes;

            this.#listaEstudiantes = data.map(a => new Alumno(a.cedula, a.nombre, a.apellido, a.notas, a.matematicas, a.biologia, a.quimica, a.fisica, a.ingles, a.castellano));
        }else{
            const dataBase = JSON.stringify({listaEstudiantes: []}, null, 2);
            fs.writeFileSync(JsonName, dataBase);
        }
    }

    registrarAlumno(cedula, nombre, apellido){
        const nuevoAlumno = new Alumno(cedula, nombre, apellido, [0, 0, 0, 0,], [0, 0, 0, 0,], [0, 0, 0, 0,], [0, 0, 0, 0,], [0, 0, 0, 0,], [0, 0, 0, 0,], [0, 0, 0, 0,]);
        this.#listaEstudiantes.push(nuevoAlumno);
    }

    eliminarAlumno(cedula)
    {
        let alumno = this.#listaEstudiantes.findIndex(alumno=>alumno.cedula===cedula);
        if (alumno !== -1) {
            this.#listaEstudiantes.splice(alumno, 1);
        }
    }

    modificarAlumno(cedula, nombre, apellido){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.nombre = nombre;
            alumno.apellido = apellido;
        }
    }   

    buscarAlumno(cedula){
        return this.#listaEstudiantes.find(alumno => alumno.cedula == cedula);
    }

    existeAlumno(cedula){
        return this.#listaEstudiantes.some(alumno => alumno.cedula == cedula)
    }

    registrarNota(cedula, notas){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.notas = notas;
        }
    }

    registrarMatematica(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.matematica[0] = Number(prompt("ingrese la primera nota: "));
            alumno.matematica[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.matematica[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.matematica[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    registrarBiologia(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.biologia[0] = Number(prompt("ingrese la primera nota: "));
            alumno.biologia[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.biologia[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.biologia[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    registrarQuimica(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.quimica[0] = Number(prompt("ingrese la primera nota: "));
            alumno.quimica[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.quimica[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.quimica[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    registrarFisica(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.fisica[0] = Number(prompt("ingrese la primera nota: "));
            alumno.fisica[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.fisica[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.fisica[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    registrarIngles(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.ingles[0] = Number(prompt("ingrese la primera nota: "));
            alumno.ingles[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.ingles[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.ingles[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    registrarCastellano(cedula){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            alumno.castellano[0] = Number(prompt("ingrese la primera nota: "));
            alumno.castellano[1] = Number(prompt("ingrese la segunda nota: "));
            alumno.castellano[2] = Number(prompt("ingrese la tercera nota: "));
            alumno.castellano[3] = Number(prompt("ingrese la cuarta nota: "));
        }
    }

    /*

        -----INNECESARIO-----

    buscarNota(cedula, eleccionMateria){
        let alumno = this.buscarAlumno(cedula);
        if (alumno != undefined) {
            switch(eleccionMateria){
                case 1: 
                    console.log(alumno.matematicas.join(", "));
                    console.log((alumno.matematicas[0] + alumno.matematicas[1] + alumno.matematicas[2] + alumno.matematicas[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 2: 
                    console.log(alumno.biologia.join(", "));
                    console.log("promedio final: " + (alumno.biologia[0] + alumno.biologia[1] + alumno.biologia[2] + alumno.biologia[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 3: 
                    console.log(alumno.quimica.join(", "));
                    console.log("promedio final: " + (alumno.quimica[0] + alumno.quimica[1] + alumno.quimica[2] + alumno.quimica[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 4: 
                    console.log(alumno.fisica.join(", "));
                    console.log("promedio final: " + (alumno.fisica[0] + alumno.fisica[1] + alumno.fisica[2] + alumno.fisica[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 5: 
                    console.log(alumno.ingles.join(", "));
                    console.log("promedio final: " + (alumno.ingles[0] + alumno.ingles[1] + alumno.ingles[2] + alumno.ingles[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 6: 
                    console.log(alumno.castellano.join(", "));
                    console.log("promedio final: " + (alumno.castellano[0] + alumno.castellano[1] + alumno.castellano[2] + alumno.castellano[3]) / 4);
                    readline.keyInPause("presione una tecla para continuar");
                break;
                case 7:
                    console.log(alumno.matematicas.join(", "));
                    console.log(alumno.biologia.join(", "));
                    console.log(alumno.quimica.join(", "));
                    console.log(alumno.fisica.join(", "));
                    console.log(alumno.ingles.join(", "));
                    console.log(alumno.castellano.join(", "));
                default:
                    console.log("seleccion invalida");
            }
        }
    }
    */

    verTodasNotas(){
        return this.#listaEstudiantes;
    }

    cerrarBD(){
        const dataBase = JSON.stringify({listaEstudiantes: this.#listaEstudiantes }, null, 2);
        fs.writeFileSync(this.#JsonName, dataBase);
    }
}

module.exports.Estudiantes = Estudiantes;
module.exports.Alumno = Alumno;