//control de notas - menu

const prompt = require("prompt-sync")();
const readline = require('readline-sync');
const {Estudiantes, Alumno} = require("./claseEstudiantes.js")
let BDEstudiantes = new Estudiantes("baseDatosEstudiantes.json");

//menu de usuario, para elegir un tipo de usuario que hara distintas acciones a la base de datos
let menuUsuario=0;
let tipoUsuario=0;

console.clear();
console.log("bienvenido");
console.log("opciones de usuario: \n");
console.log("1: usuario estudiante");
console.log("2: usuario administrativo");
console.log("0: salir\n");

menuUsuario = Number(prompt("seleccione: "))

switch(menuUsuario){
    case 1:
        console.clear();
        console.log("bienvenido");
        tipoUsuario=1;
    break;
    case 2:
        console.clear();
        console.log("bienvenido");
        tipoUsuario=2;
    break;
    default:
        console.clear();
        console.log("seleccion invalida");
}

//tipo estudiante - solo podra ver sus notas
if(tipoUsuario==1){
    
    let cedula = prompt("ingrese su cedula: ");
    if(BDEstudiantes.existeAlumno(cedula)){
        
        let menuAlumno=0;
            do{
            console.clear();
            console.log("cedula: " + cedula)
            console.log("\nopciones: ");
            console.log("1: ver sus notas");
            console.log("0: salir\n");
            menuAlumno = Number(prompt("seleccione: "));
                
            if(menuAlumno==1){
                console.clear();
                console.log("-VER NOTAS-\n");

                let i = BDEstudiantes.buscarAlumno(cedula);
                console.log("notas del estudiante: " + i.nombre + " " + i.apellido);

                console.log("\nmatematica: " + i.matematica.join(", "));
                console.log("promedio: " + ((i.matematica[0] + i.matematica[1] + i.matematica[2] + i.matematica[3]) / 4));

                console.log("\nbiologia: " + i.biologia.join(", "));
                console.log("promedio: " + ((i.biologia[0] + i.biologia[1] + i.biologia[2] + i.biologia[3]) / 4));

                console.log("\nquimica: " + i.quimica.join(", "));
                console.log("promedio: " + ((i.quimica[0] + i.quimica[1] + i.quimica[2] + i.quimica[3]) / 4));

                console.log("\nfisica: " + i.fisica.join(", "));
                console.log("promedio: " + ((i.fisica[0] + i.fisica[1] + i.fisica[2] + i.fisica[3]) / 4));

                console.log("\ningles: " + i.ingles.join(", "));
                console.log("promedio: " + ((i.ingles[0] + i.ingles[1] + i.ingles[2] + i.ingles[3]) / 4));

                console.log("\ncastellano: " + i.castellano.join(", "));
                console.log("promedio: " + ((i.castellano[0] + i.castellano[1] + i.castellano[2] + i.castellano[3]) / 4));

                readline.keyInPause("presione una tecla para continuar");
            }
        }while(menuAlumno!=0);
    }
    else{
        console.log("error, el estudiante no existe");

    }
}

//tipo admin - podra acceder a todas las funciones
if(tipoUsuario==2){

let contraseña = "1234";
let intentos = 3;
let exito=false;

console.clear();
do{
let intentoContraseña = Number(prompt("ingrese la contraseña: "));
    if(intentoContraseña!=contraseña){
        --intentos;
        console.log("contraseña incorrecta, le quedan " + intentos + " intentos");
    }
    else if(intentoContraseña==contraseña){
        console.log("contraseña correcta");
        exito=true;
        intentos=0;
    }
}while(exito==false && intentos>=1)

if(exito==true){

let menuNotas=1;
do{
    console.clear();
    console.log("opciones: \n");
    console.log("1: registrar estudiante");
    console.log("2: ver notas de un estudiante");
    console.log("3: registrar notas de un estudiante");
    console.log("4: ver notas de todos los estudiantes");
    console.log("5: eliminar un estudiante");
    console.log("6: modificar un estudiante");
    console.log("0: salir\n");

    menuNotas = Number(prompt("ingrese la opcion: "));
    console.log(" ");

    let cedula

    switch(menuNotas){
        case 0:
            console.log("saliendo...");

        break;
        case 1:
            console.clear();
            console.log("-REGISTRO DE ESTUDIANTES-\n");

            let nombre = prompt("ingrese el nombre: ")
            let apellido = prompt("ingrese el apellido: ")
            cedula = prompt("ingrese la cedula del estudiante: ")
            
            if(BDEstudiantes.existeAlumno(cedula)){
                console.log("error, el estudiante ya existe")
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                BDEstudiantes.registrarAlumno(cedula, nombre, apellido);
                console.log("estudiante registrado")
                readline.keyInPause("presione una tecla para continuar");
            }
        break;
        case 2:
            console.clear();
            console.log("-VER NOTAS DE UN ESTUDIANTE-\n");

            cedula = prompt("ingrese la cedula: ");
            
            if(!BDEstudiantes.existeAlumno(cedula)){
                console.log("el estudiante no existe")
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                let i = BDEstudiantes.buscarAlumno(cedula);
                console.log("notas del estudiante: " + i.nombre + " " + i.apellido);

                console.log("\nmatematica: " + i.matematica.join(", "));
                console.log("promedio: " + ((i.matematica[0] + i.matematica[1] + i.matematica[2] + i.matematica[3]) / 4));

                console.log("\nbiologia: " + i.biologia.join(", "));
                console.log("promedio: " + ((i.biologia[0] + i.biologia[1] + i.biologia[2] + i.biologia[3]) / 4));

                console.log("\nquimica: " + i.quimica.join(", "));
                console.log("promedio: " + ((i.quimica[0] + i.quimica[1] + i.quimica[2] + i.quimica[3]) / 4));

                console.log("\nfisica: " + i.fisica.join(", "));
                console.log("promedio: " + ((i.fisica[0] + i.fisica[1] + i.fisica[2] + i.fisica[3]) / 4));

                console.log("\ningles: " + i.ingles.join(", "));
                console.log("promedio: " + ((i.ingles[0] + i.ingles[1] + i.ingles[2] + i.ingles[3]) / 4));

                console.log("\ncastellano: " + i.castellano.join(", "));
                console.log("promedio: " + ((i.castellano[0] + i.castellano[1] + i.castellano[2] + i.castellano[3]) / 4));

                readline.keyInPause("presione una tecla para continuar");
                break;
            }
        break;
        case 3:
            console.clear();
            console.log("-REGISTRAR NOTAS DE UN ESTUDIANTE-\n");
            cedula = prompt("ingrese la cedula del estudiante: ");

            if(!BDEstudiantes.existeAlumno(cedula)){
                console.log("el estudiante no existe");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                let opcionMateria = 1;
                do{
                    console.clear();
                    console.log("elija la materia que desea cambiar: ");
                    console.log("1: matematica\n2: biologia\n3: quimica\n4: fisica\n5: ingles\n6: castellano\n0: salir");

                    opcionMateria = Number(prompt("ingrese la opcion: "));
                    switch(opcionMateria){
                        case 0:
                            console.log("volviendo al menu principal");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 1:
                            console.log("registrar notas de matematica");
                            BDEstudiantes.registrarMatematica(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 2:
                            console.log("registrar notas de biologia");
                            BDEstudiantes.registrarBiologia(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 3:
                            console.log("registrar notas de quimica");
                            BDEstudiantes.registrarQuimica(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 4:
                            console.log("registrar notas de fisica");
                            BDEstudiantes.registrarFisica(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 5:
                            console.log("registrar notas de ingles");
                            BDEstudiantes.registrarIngles(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        case 6:
                            console.log("registrar notas de castellano");
                            BDEstudiantes.registrarCastellano(cedula);
                            console.log("registro exitoso");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        default:
                            console.log("eleccion invalida");
                            readline.keyInPause("presione una tecla para continuar");
                }
                }while(opcionMateria != 0)
            }
        break;
        case 4:
            console.clear();
            console.log("-VER NOTAS DE TODOS LOS ESTUDIANTES-\n");

            let i = BDEstudiantes.verTodasNotas();
            console.log(i);
            
            readline.keyInPause("presione una tecla para continuar");
        break;
        case 5:
            console.clear();
            console.log("-ELIMINAR UN ESTUDIANTE-\n");

            cedula = prompt("ingrese la cedula del estudiante: ");
            if(!BDEstudiantes.existeAlumno(cedula)){
                console.log("el estudiante no existe");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                BDEstudiantes.eliminarAlumno(cedula);
                console.log("operacion exitosa");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
        case 6:
            console.clear();
            console.log("-MODIFICAR UN ESTUDIANTE-\n");

            cedula = prompt("ingrese la cedula del estudiante: ");
            if(!BDEstudiantes.existeAlumno(cedula)){
                console.log("el estudiante no existe");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                let i = BDEstudiantes.buscarAlumno(cedula);
                console.log("estudiante: " + i.nombre + " " + i.apellido + "\n");

                let nombre = prompt("ingrese el nuevo nombre: ");
                let apellido = prompt("ingrese el nuevo apellido: ");

                BDEstudiantes.modificarAlumno(cedula, nombre, apellido);
                console.log("operacion exitosa");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
        default:
            console.clear();
            console.log("eleccion invalida");
            readline.keyInPause("presione una tecla para continuar");
    }
}while(menuNotas!=0)

BDEstudiantes.cerrarBD();

}
}