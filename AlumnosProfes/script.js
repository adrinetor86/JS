let botonIntroducir=document.getElementById("Introducir");
let botonMostrar=document.getElementById("Mostrar");

class Alumno{
nombre;
apellido;
edad;
postre;
asignatura;

constructor(nombre,apellido,edad,postre,asignatura){
this.nombre=nombre;
this.apellido=apellido;
this.edad=edad;
this.postre=postre;
this.asignatura=asignatura;
}
}
// class Profesor{
//     nombre;
//     apellido;
//     edad;
//     postre;
//     asignatura;
    
    
//     constructor(nombre,apellido,edad,postre,asignatura){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.postre=postre;
//     this.asignatura=asignatura;
//     }

// }



// let alumno1=new Alumno("Adrian","jacek",19,"galletas","mate");

let arrAlumnos =[];


function introducirDatos(){


    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let edad=document.getElementById("edad").value;
    let postre=document.getElementById("postre").value;
    let asignatura=document.getElementById("asignatura").value;

    
   
   

 
    if(botonMostrar.addEventListener("click",function(){
     
    
        
        let parrafo=document.createElement("p");
        document.getElementById("datos").innerHTML="";
        let tabla=document.createElement("table");
        
        alumno1=new Alumno(nombre,apellidos,edad,postre,asignatura);
        arrAlumnos.push(alumno1);
            document.getElementById("datos").appendChild(parrafo);
          if(alumno1.nombre=="" || alumno1.apellido=="" || alumno1.edad=="" || alumno1.postre=="" || alumno1.asignatura==""){
            parrafo.innerHTML="no se pudo insertar"; 
            
          }else{
         
            let fila=document.createElement("tr");
            let fila2=document.createElement("tr");
        
            fila.appendChild(document.createElement("th")).innerHTML="Nombre";
            fila.appendChild(document.createElement("th")).innerHTML="Apellido";
            fila.appendChild(document.createElement("th")).innerHTML="Edad";
            fila.appendChild(document.createElement("th")).innerHTML="Postre";
            fila.appendChild(document.createElement("th")).innerHTML="Asignatura";


            fila2.appendChild(document.createElement("td")).innerHTML=arrAlumnos[arrAlumnos.length-1].nombre;
            fila2.appendChild(document.createElement("td")).innerHTML=arrAlumnos[arrAlumnos.length-1].apellido;
            fila2.appendChild(document.createElement("td")).innerHTML=arrAlumnos[arrAlumnos.length-1].edad;
            fila2.appendChild(document.createElement("td")).innerHTML=arrAlumnos[arrAlumnos.length-1].postre;
            fila2.appendChild(document.createElement("td")).innerHTML=arrAlumnos[arrAlumnos.length-1].asignatura;
            
            tabla.appendChild(fila)
            tabla.appendChild(fila2)
         document.getElementById("datos").appendChild(tabla);
        
          // parrafo.innerHTML="Nombre: "+alumno1.nombre+"</br> Apellido: "+alumno1.apellido+"<br>Edad: "+alumno1.edad+"<br>Postre: "+alumno1.postre+"<br> Asignatura: "+alumno1.asignatura+""
          }
        

})){}
         
      
           

}
