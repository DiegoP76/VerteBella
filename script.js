
const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

                              /* Al iniciar, oculta todas, menos PROMOS */
document.getElementById("div_mostrarPromos").style.display = "block";
document.getElementById("div_mostrarPastas").style.display = "none";
document.getElementById("div_mostrarPolleria").style.display = "none";
document.getElementById("div_mostrarRebozados").style.display = "none";
document.getElementById("div_mostrarMariscos").style.display = "none";
document.getElementById("div_mostrarOtros").style.display = "none";

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display = "none";
}


/* aparace / desaparece */

function Mostrar(i){

    if (i=="promos"){
        document.getElementById("div_mostrarPromos").style.display = "block";
        document.getElementById("div_mostrarPastas").style.display = "none";
        document.getElementById("div_mostrarPolleria").style.display = "none";
        document.getElementById("div_mostrarRebozados").style.display = "none";
        document.getElementById("div_mostrarMariscos").style.display = "none";
        document.getElementById("div_mostrarOtros").style.display = "none";


    }else if (i=="pastas"){
        document.getElementById("div_mostrarPromos").style.display = "none";
        document.getElementById("div_mostrarPastas").style.display = "block";
        document.getElementById("div_mostrarPolleria").style.display = "none";
        document.getElementById("div_mostrarRebozados").style.display = "none";
        document.getElementById("div_mostrarMariscos").style.display = "none";
        document.getElementById("div_mostrarOtros").style.display = "none";

    }else if (i=="polleria"){
        document.getElementById("div_mostrarPromos").style.display = "none";
        document.getElementById("div_mostrarPastas").style.display = "none";
        document.getElementById("div_mostrarPolleria").style.display = "block";
        document.getElementById("div_mostrarRebozados").style.display = "none";
        document.getElementById("div_mostrarMariscos").style.display = "none";
        document.getElementById("div_mostrarOtros").style.display = "none";

    }else if (i=="rebozados"){
        document.getElementById("div_mostrarPromos").style.display = "none";
        document.getElementById("div_mostrarPastas").style.display = "none";
        document.getElementById("div_mostrarPolleria").style.display = "none";
        document.getElementById("div_mostrarRebozados").style.display = "block";
        document.getElementById("div_mostrarMariscos").style.display = "none";
        document.getElementById("div_mostrarOtros").style.display = "none";

    }else if (i=="mariscos"){
        document.getElementById("div_mostrarPromos").style.display = "none";
        document.getElementById("div_mostrarPastas").style.display = "none";
        document.getElementById("div_mostrarPolleria").style.display = "none";
        document.getElementById("div_mostrarRebozados").style.display = "none";
        document.getElementById("div_mostrarMariscos").style.display = "block";
        document.getElementById("div_mostrarOtros").style.display = "none";

    }else{
        document.getElementById("div_mostrarPromos").style.display = "none";
        document.getElementById("div_mostrarPastas").style.display = "none";
        document.getElementById("div_mostrarPolleria").style.display = "none";
        document.getElementById("div_mostrarRebozados").style.display = "none";
        document.getElementById("div_mostrarMariscos").style.display = "none";
        document.getElementById("div_mostrarOtros").style.display = "block";

    }

}
function Ocultar(){
    
    document.getElementById("div_mostrarPromos").style.display = "none";
    document.getElementById("div_mostrarPastas").style.display = "none";
    document.getElementById("div_mostrarPolleria").style.display = "none";
    document.getElementById("div_mostrarRebozados").style.display = "none";
    document.getElementById("div_mostrarMariscos").style.display = "none";
    document.getElementById("div_mostrarOtros").style.display = "none";

}