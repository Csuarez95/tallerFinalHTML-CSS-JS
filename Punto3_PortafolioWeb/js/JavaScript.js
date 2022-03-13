/* Funciones botones */
function paraPSEINT() {
    document.location.href = "pseint.html";
}

function paraJAVA() {
    document.location.href = "java.html";
}

function paraPrincipal(){
    document.location.href="index.html";
}

function paraHojaVida(){
    document.location.href="hojaDeVida.html";
}


//Acordeon
const eventoMenu = () =>{
    let btnItems = document.querySelectorAll(".item .btnItem");
    
    for (let i = 0; i < btnItems.length; i++){
        btnItems[i].addEventListener("click", function(e){
            console.log(e.target);
            let btn = e.target;
            if (btn.className == "btnItem active"){
                btnItems[i].classList.remove("active");
            } else{
                btn.classList.add("active");
            }
        })
    }
    }

//Fondo Hoja de vida
const cambiarFondo = (x) => {
    let body = document.getElementById("bodyHoja");
    body.style.backgroundColor = x.value;
}