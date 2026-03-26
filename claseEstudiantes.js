//clases y funciones

const fs = require("fs");
const prompt = require("prompt-sync")();
const readline = require('readline-sync');

//clase padre
class Persona {
    cedula;
    nombre;
    apellido;

    constructor(cedula, nombre, apellido){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    modificarNombre(nombre){
        this.nombre = nombre;
    }
    modificarApellido(apellido){
        this.apellido = apellido;
    }
}


class Alumno extends Persona {
    
    notas;
    matematica;
    biologia;
    quimica;
    fisica;
    ingles;
    castellano;

    constructor(cedula, nombre, apellido, notas=[0,0,0,0], matematica=[0,0,0,0], biologia=[0,0,0,0], quimica=[0,0,0,0], fisica=[0,0,0,0], ingles=[0,0,0,0], castellano=[0,0,0,0]){
        super(cedula, nombre, apellido);

        this.notas = notas;
        this.matematica = matematica;
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
        //verifica si la ruta existe
        if (fs.existsSync(JsonName)) {
            //como existe, lo lee
            const dataBase = fs.readFileSync(JsonName, "utf8");
            //convierte ese JSON en un Objeto
            const data = JSON.parse(dataBase).listaEstudiantes;

            //crea un nuevo array y lo asigna a listaEstudiantes
            this.#listaEstudiantes = data.map(a => new Alumno(a.cedula, a.nombre, a.apellido, a.notas, a.matematicas, a.biologia, a.quimica, a.fisica, a.ingles, a.castellano));
        }else{
            //de lo contrario, lo crea
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
        alumno.modificarNombre(nombre);
        alumno.modificarApellido(apellido);
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

    verTodasNotas(){
        return this.#listaEstudiantes;
    }

    cerrarBD(){
        //guarda los datos de listaEstudiantes en esta clase al JSON
        const dataBase = JSON.stringify({listaEstudiantes: this.#listaEstudiantes }, null, 2);
        fs.writeFileSync(this.#JsonName, dataBase);
    }
}

module.exports.Persona = Persona;

module.exports.Estudiantes = Estudiantes;
module.exports.Alumno = Alumno;