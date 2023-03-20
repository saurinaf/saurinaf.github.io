
let foto, nombre, apellido;



$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
        
        foto = data.results[0].picture.large;
        apellido= data.results[0].name.last;
        nombre = data.results[0].name.first;

        
        fotoPerfil.src=foto
        apellidoPersona.innerText=apellido.toUpperCase();
        nombrePersona.innerText=nombre;
 
    }
});


/*Scroll to top*/
let btnToTop=document.getElementById("btnToTop");
window.onscroll=function(){visibilidadBtnToTopFunc()};

btnToTop.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});


function visibilidadBtnToTopFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnToTop.style.display="block";
        setTimeout(function(none){
            btnToTop.style.display= "none";
        }, 2100);
    } else {
        btnToTop.style.display="none";
    }
}




