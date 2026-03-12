//base datos
let fs = require("fs");
const readline = require('readline-sync');
const prompt = require("prompt-sync")();

let lista_estudiantes=[];
let dataBase;

module.exports.registrar_alumno=(nombre,apellido,cedula)=>
{
    lista_estudiantes.push({
        nombre:nombre,
        apellido:apellido,
        cedula:cedula,
        notas:[0,0,0,0],
        matematicas:[0,0,0,0],
        biologia:[0,0,0,0],
        quimica:[0,0,0,0],
        fisica:[0,0,0,0],
        ingles:[0,0,0,0],
        castellano:[0,0,0,0]
    })
    readline.keyInPause("operacion exitoso");
}

module.exports.cambiar_nota=()=>
{
    console.clear();
    let peticion_cedula = Number(prompt("ingrese la cedula que busca: "));
    let estudiante = lista_estudiantes.find(alumno=>alumno.cedula==peticion_cedula);

    if(estudiante===undefined){
        console.log("el estudiante no existe");
    }else{
        console.log("notas del estudiante " + estudiante.nombre + " " + estudiante.apellido)
        console.log("opciones\n1: matematicas\n2: biologia\n3: quimica\n4: fisica\n5: ingles\n6: castellano\n");
        let eleccion_nota = Number(prompt("seleccione: "))
        switch(eleccion_nota){
            case 1:
                estudiante.matematicas[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.matematicas[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.matematicas[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.matematicas[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            case 2:
                estudiante.biologia[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.biologia[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.biologia[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.biologia[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            case 3:
                estudiante.quimica[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.quimica[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.quimica[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.quimica[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            case 4:
                estudiante.fisica[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.fisica[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.fisica[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.fisica[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            case 5:
                estudiante.ingles[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.ingles[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.ingles[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.ingles[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            case 6:
                estudiante.castellano[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.castellano[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.castellano[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.castellano[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;
            default:
                console.log("seleccion invalida");
        }
    }
}

module.exports.buscar_nota=(peticion_cedula)=>
{
    console.clear();
    let estudiante = lista_estudiantes.find(alumno=>alumno.cedula==peticion_cedula);

    if(estudiante===undefined){
        console.log("el estudiante no existe");
    }else{
        console.log("notas del estudiante " + estudiante.nombre + " " +  estudiante.apellido);

        console.log("\nmatematicas: " + estudiante.matematicas.join(", "));
        console.log("promedio final: " + (estudiante.matematicas[0] + estudiante.matematicas[1] + estudiante.matematicas[2] + estudiante.matematicas[3]) / 4);
        
        console.log("\nbiologia: " + estudiante.biologia.join(", "));
        console.log("promedio final: " + (estudiante.biologia[0] + estudiante.biologia[1] + estudiante.biologia[2] + estudiante.biologia[3]) / 4);
        
        console.log("\nquimica: " + estudiante.quimica.join(", "));
        console.log("promedio final: " + (estudiante.quimica[0] + estudiante.quimica[1] + estudiante.quimica[2] + estudiante.quimica[3]) / 4);
        
        console.log("\nfisica: " + estudiante.fisica.join(", "));
        console.log("promedio final: " + (estudiante.fisica[0] + estudiante.fisica[1] + estudiante.fisica[2] + estudiante.fisica[3]) / 4);
        
        console.log("\ningles: " + estudiante.ingles.join(", "));
        console.log("promedio final: " + (estudiante.ingles[0] + estudiante.ingles[1] + estudiante.ingles[2] + estudiante.ingles[3]) / 4);
        
        console.log("\ncastellano: " + estudiante.castellano.join(", "));
        console.log("promedio final: " + (estudiante.castellano[0] + estudiante.castellano[1] + estudiante.castellano[2] + estudiante.castellano[3]) / 4);
    }
    readline.keyInPause("presione una tecla para continuar");
}

module.exports.ver_notas=()=>
{
    let sumatoria=0;
    console.clear();
    for(let i=0; i<lista_estudiantes.length; i++){
    console.log("\n"+lista_estudiantes[i].nombre + " " + lista_estudiantes[i].apellido);
    
    console.log( "matematicas: " + lista_estudiantes[i].matematicas.join(", "));
    sumatoria = (lista_estudiantes[i].matematicas[0] + lista_estudiantes[i].matematicas[1] + lista_estudiantes[i].matematicas[2] + lista_estudiantes[i].matematicas[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    
    console.log( "biologia: " + lista_estudiantes[i].biologia.join(", "));
    sumatoria = (lista_estudiantes[i].biologia[0] + lista_estudiantes[i].biologia[1] + lista_estudiantes[i].biologia[2] + lista_estudiantes[i].biologia[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    
    console.log( "quimica: " + lista_estudiantes[i].quimica.join(", "));
    sumatoria = (lista_estudiantes[i].quimica[0] + lista_estudiantes[i].quimica[1] + lista_estudiantes[i].quimica[2] + lista_estudiantes[i].quimica[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    
    console.log( "fisica: " + lista_estudiantes[i].fisica.join(", "));
    sumatoria = (lista_estudiantes[i].fisica[0] + lista_estudiantes[i].fisica[1] + lista_estudiantes[i].fisica[2] + lista_estudiantes[i].fisica[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    
    console.log( "ingles: " + lista_estudiantes[i].ingles.join(", "));
    sumatoria = (lista_estudiantes[i].ingles[0] + lista_estudiantes[i].ingles[1] + lista_estudiantes[i].ingles[2] + lista_estudiantes[i].ingles[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    
    console.log( "castellano: " + lista_estudiantes[i].castellano.join(", "));
    sumatoria = (lista_estudiantes[i].castellano[0] + lista_estudiantes[i].castellano[1] + lista_estudiantes[i].castellano[2] + lista_estudiantes[i].castellano[3]) / 4;
    console.log("promedio final es: " + sumatoria);
    }
    readline.keyInPause("presione una tecla para continuar");
}

module.exports.eliminar_estudiante=()=>
{
    console.clear();
    let peticion_cedula = Number(prompt("ingrese la cedula que busca: "));
    let i = lista_estudiantes.findIndex(alumno=>alumno.cedula===peticion_cedula);

    if(i===undefined, i<=-1){
        console.log("el estudiante no existe");
    }else{
        lista_estudiantes.splice(i, 1);
        //console.log(lista_estudiantes);
        readline.keyInPause("operacion exitosa");
    }
}

module.exports.abrirBD=()=>{
    dataBase= fs.readFileSync("basedatos.json","utf8");
    lista_estudiantes=JSON.parse(dataBase).lista_estudiantes;
}

module.exports.cerrarBD=()=>{
    
    dataBase = JSON.stringify({lista_estudiantes:lista_estudiantes},null,2);
    fs.writeFileSync("basedatos.json",dataBase);
}

/*module.exports.cambiar_nota=()=>
{
    console.clear();
    let peticion_cedula = Number(prompt("ingrese la cedula que busca: "));
    let estudiante = lista_estudiantes.find(alumno=>alumno.cedula==peticion_cedula);

    if(estudiante===undefined){
        console.log("el estudiante no existe");
    }else{
        console.log("notas del estudiante " + estudiante.nombre + "\n:" + estudiante.notas.join(", "));
        let eleccion_nota = Number(prompt("seleccione la nota que desea cambiar (1° a 4° o 5 para cambiar todas): "))
        switch(eleccion_nota){
            case 1:
                estudiante.notas[0] = Number(prompt("ingrese la primera nota: "));
                readline.keyInPause("nota registrada");
            break;
            case 2:
                estudiante.notas[1] = Number(prompt("ingrese la segunda nota: "));
                readline.keyInPause("nota registrada");
            break;
            case 3:
                estudiante.notas[2] = Number(prompt("ingrese la tercera nota: "));
                readline.keyInPause("nota registrada");
            break;
            case 4:
                estudiante.notas[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("nota registrada");
            break;
            case 5:
                estudiante.notas[0] = Number(prompt("ingrese la primera nota: "));
                estudiante.notas[1] = Number(prompt("ingrese la segunda nota: "));
                estudiante.notas[2] = Number(prompt("ingrese la tercera nota: "));
                estudiante.notas[3] = Number(prompt("ingrese la cuarta nota: "));
                readline.keyInPause("notas registradas");
            break;            
            default:
                console.log("seleccion invalida")
        }
    }
}*/