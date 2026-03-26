//clase Profesro
const fs = require("fs");
const prompt = require("prompt-sync")();
const readline = require('readline-sync');
const { Persona } = require("./claseEstudiantes");


class Profesor extends Persona {

    materia;

    constructor(cedula, nombre, apellido, materia){
        super(cedula, nombre, apellido);
        this.materia = materia;
    }
}

class Maestro {

    #listaMaestros = [];
    #JsonName = "";

    constructor(JsonName){
        this.#JsonName = JsonName;
        if (fs.existsSync(JsonName)) {
            const dataBase = fs.readFileSync(JsonName, "utf8");
            const data = JSON.parse(dataBase).#listaMaestros;

            this.#listaMaestros = data.map(b => new Profesor(b.cedula, b.nombre, b.apellido, b.materia));
        }else{
            const dataBase = JSON.stringify({listaMaestros: []}, null, 2);
            fs.writeFileSync(JsonName, dataBase);
        }
    }

    registrarMaestro(cedula, nombre, apellido, materia){
        const nuevoMaestro = new Profesor(cedula, nombre, apellido, materia);
        this.#listaMaestros.push(nuevoMaestro);
    }

    eliminarMaestro(cedula)
    {
        let alumno = this.#listaMaestros.findIndex(alumno=>alumno.cedula===cedula);
        if (alumno !== -1) {
            this.#listaMaestros.splice(alumno, 1);
        }
    }


    cerrarBD(){
        const dataBase = JSON.stringify({listaMaestros: this.#listaMaestros}, null, 2);
        fs.writeFileSync(this.JsonName, dataBase);
    }
}

module.exports.Profesor = Profesor;
module.exports.Maestro = Maestro;