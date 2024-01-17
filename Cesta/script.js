/*AQUI EL JS*/
let añadir1 =document.getElementById("aniadir1");
let añadir2 =document.getElementById("aniadir2");
let añadir3 =document.getElementById("aniadir3");
let botonComprar=document.getElementById("comprar");
let descuento=document.getElementById("aplicarDescuento");
let resumenCompra=document.getElementById("resumenCompra");
let borrar1=document.getElementById("borrar1");
let borrar2=document.getElementById("borrar2");
let borrar3=document.getElementById("borrar3");
let precioFinal=0;
let arrProducto1=[];
let arrProducto2=[];
let arrProducto3=[];

volverCompra.style.display="none";
let producto1={
    nombre:"camiseta",
    precio:100
}
let producto2={
    nombre:"chistorra",
    precio:50
}
let producto3={
    nombre:"videojuego",
    precio:75
}

descuento.style.display = "none";

añadir1.addEventListener("click",function(){
    arrProducto1.push(100)
    precioFinal+=100;
})

añadir2.addEventListener("click",function(){
    arrProducto2.push(50);
    precioFinal+=50;
})

añadir3.addEventListener("click",function(){
    arrProducto3.push(75);
    precioFinal+=75;
})
borrar1.addEventListener("click",function(){
    arrProducto1.pop(); 
});

botonComprar.addEventListener("click",function(){
    comprar.style.display = "none";
    if(arrProducto1.length!=0 ||arrProducto2.length!=0 || arrProducto3.length!=0){
        
        añadir1.style.display = "none";
        añadir2.style.display = "none";
        añadir3.style.display = "none";
        borrar1.style.display = "none";
        borrar2.style.display = "none";
        borrar3.style.display = "none";
        document.getElementsByTagName("p")[0].innerHTML="Has comprado "+arrProducto1.length+" "+producto1.nombre
        document.getElementsByTagName("p")[1].innerHTML="Has comprado "+arrProducto2.length+" "+producto2.nombre
        document.getElementsByTagName("p")[2].innerHTML="Has comprado "+arrProducto3.length+" "+producto3.nombre
        document.getElementsByTagName("p")[3].innerHTML="Precio Final: "+precioFinal +" €";
        document.getElementsByTagName("p")[4].innerHTML="Si dispones de la tarjeta gold pulsa: ";
    
        descuento.style.display = "block";


        descuento.addEventListener("click",function(){
            document.getElementsByTagName("p")[3].innerHTML="Precio Final con el descuento : "+(precioFinal-(precioFinal*0.20)) +" €";
            descuento.style.display = "none";
            document.getElementsByTagName("p")[4].innerHTML="";
        })
    }else{
    descuento.style.display = "none";
    document.getElementsByTagName("p")[3].innerHTML="La cesta esta vacia";
   
    comprar.style.display = "block";
}
})




function parrafos(){
        // Crear un nuevo div
        var resumenDiv = document.createElement("div");
    
        // Obtener el cuerpo del documento
        var body = document.body;
    
        // Agregar el div al cuerpo del documento
        body.appendChild(resumenDiv);
    
        // Crear párrafos dinámicamente y agregarlos al div
        for (var i = 0; i < 5; i++) {
            // Crear un nuevo párrafo
            var newParagraph = document.createElement("p");
    
            // Añadir texto al párrafo
            var text;
    
            switch (i) {
                case 0:
                    text = "Has comprado " + arrProducto1.length + " " + producto1.nombre;
                    break;
                case 1:
                    text = "Has comprado " + arrProducto2.length + " " + producto2.nombre;
                    break;
                case 2:
                    text = "Has comprado " + arrProducto3.length + " " + producto3.nombre;
                    break;
                case 3:
                    text = "Precio Final: " + precioFinal + " €";
                    break;
                case 4:
                    text = "Si dispones de la tarjeta gold pulsa: ";
                    break;
                default:
                    text = ""; // Por si acaso hay más de 5 elementos p
            }
    
            var textNode = document.createTextNode(text);
    
            // Agregar el texto al párrafo
            newParagraph.appendChild(textNode);
    
            // Agregar el párrafo al div
            resumenDiv.appendChild(newParagraph);
        }
}



