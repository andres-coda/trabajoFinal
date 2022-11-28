const cantidadArticulos = 15;
const contenido = document.getElementById("contenido");
const botonesMenos = document.getElementsByClassName("botonMenos");
const botonesMas = document.getElementsByClassName("botonMas");
const botonComprar = document.getElementById("comprar")
const inputCantidad = document.getElementsByClassName("etqCuadrado");
const totalCompra = document.getElementById("compraParrafo");
const articulosPrecios = [190, 750, 750, 180, 750, 180, 380, 590, 590,500,650,320,700,700,300];
const articulosProductos = [
  "arandano",
  "durazno",
  "melon",
  "sandia",
  "uva",
  "frutilla",
  "cereza",
  "manzana roja",
  "banana",
  "mango",
  "damasco",
  "caqui",
  "Ciruela",
  "Anana",
  "Palta"
];
const resultadoCompra = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const articulosCantidad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < cantidadArticulos; i++) {
  inputCantidad[i].ariaValueText = "0";
  inputCantidad[i].innerText=inputCantidad[i].ariaValueText;
}
totalCompra.innerText ="\n"+"Total $"+String(sumaTotalCompra());

function restar(i) {
  let numUno = Number(inputCantidad[i].ariaValueText);
  numUno = numUno - 1;
  if (numUno < 0) {
    numUno = 0;
  }
  inputCantidad[i].ariaValueText = String(numUno);
}
function sumar(i) {
  let numUno = Number(inputCantidad[i].ariaValueText);
  numUno = numUno + 1;
  inputCantidad[i].ariaValueText = String(numUno);
}

function multiplicar(){
    for (let i=0;i<cantidadArticulos;i++){
        resultadoCompra[i]=articulosPrecios[i]*Number(inputCantidad[i].ariaValueText);
    }
}

function sumaTotalCompra (){
    let suma=0;
    for(let i=0;i<cantidadArticulos;i++){
        suma=resultadoCompra[i]+suma;
    }
    
    return suma;
}

function mostrarCompra(){
    let textoMostrar="";
    for (let i=0;i<cantidadArticulos;i++){
        if(Number(inputCantidad[i].ariaValueText)>0){
            textoMostrar=textoMostrar+inputCantidad[i].ariaValueText+" "+articulosProductos[i]+" $"+ resultadoCompra[i]+"\n";
        }
    }
    return textoMostrar;
}

contenido.addEventListener("click",(e) => {
  /*console.log(e.target.className);
  console.log(e);*/
  if (e.target && e.target.className==="botonMenos") {
    restar(Number(e.target.id));
    inputCantidad[Number(e.target.id)].innerText=inputCantidad[Number(e.target.id)].ariaValueText;
    multiplicar()
    totalCompra.innerText =mostrarCompra()+"\n"+"Total $"+String(sumaTotalCompra());
  } else if(e.target && e.target.className==="botonMas"){
      sumar(Number(e.target.id));
      inputCantidad[Number(e.target.id)].innerText=inputCantidad[Number(e.target.id)].ariaValueText;
      multiplicar()
      totalCompra.innerText =mostrarCompra()+"\n"+"Total $"+String(sumaTotalCompra());
  }
});




botonComprar.addEventListener("click", () => {
    //multiplicar()
    //totalCompra.innerText =mostrarCompra()+"\n"+"Total $"+String(sumaTotalCompra());
    alert("gracias por su compra");
  });
  
  console.log(inputCantidad[0]);
//.addEventListener("click", () => {




/*-------------------- Programación de registro  -------------------*/

