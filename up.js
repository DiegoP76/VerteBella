
buttonUp = document.getElementById("up_fig");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 400){

        buttonUp.style.transform = "scale(1)";
    }
    else if(scroll < 400){

        buttonUp.style.transform = "scale(0)";
    }
}