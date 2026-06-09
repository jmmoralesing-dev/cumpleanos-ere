const boton = document.getElementById("regaloBtn");

const inicio = document.getElementById("inicio");

const regalo = document.getElementById("regalo");

const musica = document.getElementById("musica");

const slides = document.querySelectorAll(".slide");

const mensajeFinal = document.getElementById("mensajeFinal");

let indice = 0;


boton.addEventListener("click", () => {

    inicio.style.display = "none";

    regalo.classList.remove("oculto");

    musica.play();

    mostrarSlides();

});


function mostrarSlides() {

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    if (indice < slides.length) {

        slides[indice].classList.add("activo");

        indice++;

        setTimeout(mostrarSlides, 15000);

    }

    else {

        document.querySelector(".galeria").style.display = "none";

        mensajeFinal.classList.remove("oculto");

    }

}
