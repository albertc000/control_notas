//albert campos, carlos viloria, yeferson zambrano, sandro montilla

const prompt = require("prompt-sync")();
const BD = require("./basedatos.js");

//menu usuario para elegir un tipo de usuario que hara distintas acciones a la base de datos
let menu_usuario=0;
let tipo_usuario=0;
    console.clear();
    console.log("opciones: \n");
    console.log("1: usuario estudiante");
    console.log("2: usuario administrativo");
    console.log("0: salir\n");
    menu_usuario = Number(prompt("seleccione: "))

    switch(menu_usuario){
        case 1:
            console.clear();
            console.log("bienvenido");
            tipo_usuario=1;
        break;
        case 2:
            console.clear();
            console.log("bienvenido");
            tipo_usuario=2;
        break;
        default:
            console.clear();
            console.log("seleccion invalida");
    }

//tipo estudiante - solo podra ver sus notas
if(tipo_usuario==1){

let peticion_cedula = Number(prompt("ingrese su cedula: "))

BD.abrirBD();
let menu=1;
    do{
    console.clear();
    console.log("cedula: " + peticion_cedula)
    console.log("opciones: ");
    console.log("1: ver sus notas");
    console.log("0: salir\n");
    menu = Number(prompt("seleccione: "));
        
    if(menu==1){
        console.clear();
        console.log("-BUSCAR NOTA-");
        BD.buscar_nota(peticion_cedula);
    }
}while(menu!=0);
}

//tipo admin - podra cambiar aspectos
if(tipo_usuario==2){

//entrada usuario admin
let contraseña = 1234;
let intentos = 3;
let exito=false;

console.clear();
do{
let intento_contraseña = Number(prompt("ingrese la contraseña: "));
    if(intento_contraseña!=contraseña){
        --intentos;
        console.log("contraseña incorrecta, le quedan " + intentos + " intentos");
    }
    else if(intento_contraseña==contraseña){
        console.log("contraseña correcta");
        exito=true;
        intentos=0;
    }
}while(exito==false && intentos>=1)

if(exito==true){

BD.abrirBD();
let menu=1;
do{
    console.clear();
    console.log("\nopciones: ");
    console.log("1: registrar estudiante");
    console.log("2: ver notas de un estudiante");
    console.log("3: registrar notas de un estudiante");
    console.log("4: ver notas de todos los estudiantes");
    console.log("5: eliminar un estudiante");
    console.log("0: salir\n");

    menu = Number(prompt("ingrese la opcion: "));
    console.log(" ");

    if(menu==1){
        console.clear();
        console.log("-REGISTRO DE ESTUDIANTES-");
        BD.registrar_alumno(prompt("ingrese el nombre: "), prompt("ingrese el apellido: "), Number(prompt("ingrese la cedula: ", 0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0)))
    }
    else if(menu==2){
        console.clear();
        console.log("-BUSCAR NOTA-");
        BD.buscar_nota(Number(prompt("ingrese la cedula que busca: ")));
    }
    else if(menu==3){
        console.clear();
        console.log("-REGISTRAR NOTAS DE UN ESTUDIANTE-");
        BD.cambiar_nota();
    }
    else if(menu==4){
        console.clear();
        console.log("-VER NOTAS DE TODOS LOS ESTUDIANTES-");
        BD.ver_notas();
    }
    else if(menu==5){
        console.clear();
        console.log("-ELIMINAR UN ESTUDIANTE-");
        BD.eliminar_estudiante();
    }
}while(menu!=0);
BD.cerrarBD();
}

}