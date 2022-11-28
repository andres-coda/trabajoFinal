const formElement = document.getElementById("form");
const inputs = document.getElementsByTagName("input");
formElement.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    let condicion=true;
    for (var i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value===""){
            condicion=false
        }
        console.log(inputs[i].value);
    }
    if (condicion===true){
        alert(`${inputs[0].value} ${inputs[1].value} \n Gracias por registrarte`);
        formElement.reset();
        location.href = '../index.html';
    } else {
        alert("Tiene que completar todos los campos para registrarse");
    }
   
}

