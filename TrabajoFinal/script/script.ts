/*let botonesMenos = document.getElementsByClassName("botonMenos");
let botonesMas = document.getElementsByClassName("botonMas");
let inputCantidad = document.getElementsByClassName("etqCuadrado");
let resultadoCompra = document.getElementById("compraParrafo");
let articulosPrecios = [190, 750, 750, 180, 750, 180, 380, 590, 590];
let articulosProductos = [
  "arandano",
  "durazno",
  "melon",
  "sandia",
  "uva",
  "frutilla",
  "cereza",
  "manzana roja",
  "banana"
];
let articulosCantidad = [0, 0, 0, 0, 0, 0, 0, 0, 0];
inputCantidad[1].ariaValueText = "0";

for (let i = 0; i < 9; i++) {
  inputCantidad[i].ariaValueText = "0";
}

function restar(i:number):void {
  let numUno: number = Number(inputCantidad[i].ariaValueText);
  numUno = numUno - 1;
  if (numUno < 0) {
    numUno = 0;
  }
  inputCantidad[i].ariaValueText = String(numUno);
  console.log(inputCantidad[i].ariaValueText);
}
function sumar(i:number):void {
  let numUno: number = Number(inputCantidad[i].ariaValueText);
  numUno = numUno + 1;
  inputCantidad[i].ariaValueText = String(numUno);
}

console.log(inputCantidad[0].ariaValueText);

botonesMenos[0].addEventListener("click", () => {
  restar(0);
  inputCantidad[0].innerHTML;
  resultadoCompra.innerText = inputCantidad[0].ariaValueText;
});
botonesMas[0].addEventListener("click", () => {
  sumar(0);
  inputCantidad[0].innerHTML;
  resultadoCompra.innerText = inputCantidad[0].ariaValueText;
});
//.addEventListener("click", () => {
*/