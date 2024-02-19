import {Alumno} from "./Alumno.js";

let alumno=new Alumno("Pedro","Gomez","20","Flan","Lengua");
let alumno2=new Alumno("Paco","lopez","20","Flan","Lengua");
let divContenedor=document.querySelector(".alumno");
let botonMostrar=document.getElementById("Mostrar");
let botonInsertar=document.createElement("button");
let parrafo=document.createElement("p");
let arrAlumnos=[];
botonInsertar.innerHTML="Insertar"


divContenedor.appendChild(botonInsertar)
console.log(alumno);
insertarAlumno();

function insertarAlumno(){
    arrAlumnos.push(alumno);
     console.log(arrAlumnos[arrAlumnos.length-1].nombre)
     console.log(arrAlumnos[arrAlumnos.length-1].apellidos)
     console.log(arrAlumnos[arrAlumnos.length-1].edad)
     console.log(arrAlumnos[arrAlumnos.length-1].postre)
     console.log(arrAlumnos[arrAlumnos.length-1].asignatura)
    


     arrAlumnos.forEach(datos => {
        for (let clave in datos){
            console.log(datos[clave])
        }
   });

}

