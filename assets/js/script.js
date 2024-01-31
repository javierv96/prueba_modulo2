var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#buttonEnviar").click(function (e) {
	e.preventDefault();
	alert("El correo fue enviado correctamente...");
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

$(".tarjetaImagen").click(function () {
	$(".contenido").toggle();
	$(".contenido").show(1000);
});

$("#tituloAboutUs").dblclick(function(){
    $(this).css("color", "yellow");
});

$("#tituloDestacados").dblclick(function(){
    $(this).css("color", "yellow");
});

$("#tituloContacto").dblclick(function(){
    $(this).css("color", "yellow");
});

$("#viajesChile").dblclick(function(){
    $(this).css("color", "yellow");
});

// Muestra u oculta el botón según el desplazamiento de la página
window.onscroll = function () {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};