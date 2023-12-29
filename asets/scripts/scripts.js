

document.getElementById('Entrantes').addEventListener('click', function() {
    // Obtenemos la posición (offsetTop) de la sección a la que queremos ir
    const seccionDestino = document.getElementById('Entrantes_destino');
    const posicionDestino = seccionDestino.offsetTop;

    // Hacemos que la página se desplace suavemente hacia la posición deseada
    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});



document.getElementById('Croquetas').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Croquetas_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Cuchara').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Cuchara_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Arroces').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Arroces_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Pescado').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Pescado_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Carnes').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Carnes_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Guarniciones').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Guarniciones_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});

document.getElementById('Postres').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Postres_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});


document.getElementById('Entrantes').addEventListener('click', function() {
    
    const seccionDestino = document.getElementById('Entrantes_destino');
    const posicionDestino = seccionDestino.offsetTop;

    window.scrollTo({
        top: posicionDestino,
        behavior: 'smooth'
    });
});




window.addEventListener('scroll', function() {
    var botonSubirArriba = document.getElementById('botonSubirArriba');
    if (window.scrollY > 100) { // Muestra el botón cuando el desplazamiento es mayor a 100px
        botonSubirArriba.style.display = 'block';
    } else {
        botonSubirArriba.style.display = 'none';
    }
});

document.getElementById('botonSubirArriba').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ventanas modales 
function famAntiinflamatoria(){
    //Mostrar la modal
    document.querySelector("#div_modal_Antiinflamatoria").style.display = "flex";
   
}

function famPackCuchara(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Cuchara").style.display = "flex";
   
}

function famPackDieta2(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Dieta_2").style.display = "flex";
   
}

function famPackDieta1(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Dieta_1").style.display = "flex";
   
}

function famPackCuchara(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Cuchara").style.display = "flex";
   
}

function famPackCuchara(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Cuchara").style.display = "flex";
   
}

function famPackCuchara(){
    //Mostrar la modal
    document.querySelector("#div_modal_Pack_Cuchara").style.display = "flex";
   
}

// Cerrar modales

// Obtener la imagen con la clase 'regresar'
var imagenRegresar = document.querySelector('.regresar');

// Agregar un evento de clic a la imagen
imagenRegresar.addEventListener('click', function() {
    // Redirigir a la página principal
    window.location.href = '/act03_Deivi_Perdomo_Montegudo';
});

var imagenRegresar1 = document.querySelector('.regresar1');

// Agregar un evento de clic a la imagen
imagenRegresar1.addEventListener('click', function() {
    // Redirigir a la página principal
    window.location.href = '/act03_Deivi_Perdomo_Montegudo';
});

var imagenRegresar2 = document.querySelector('.regresar2');

// Agregar un evento de clic a la imagen
imagenRegresar2.addEventListener('click', function() {
    // Redirigir a la página principal
    window.location.href = '/act03_Deivi_Perdomo_Montegudo';
});

var imagenRegresar3 = document.querySelector('.regresar3');

// Agregar un evento de clic a la imagen
imagenRegresar3.addEventListener('click', function() {
    // Redirigir a la página principal
    window.location.href = '/act03_Deivi_Perdomo_Montegudo';
});



//act03_Deivi_Perdomo_Montegudo
