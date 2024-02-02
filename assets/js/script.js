//Tooltip
var tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
//Funcion Enviar Correo
$("#buttonEnviar").click(function (e) {
  e.preventDefault();
  alert("El correo fue enviado correctamente...");
});
//Funcion desaparecer contenido de tarjetas
$(".tarjetaImagen").click(function () {
  $(".contenido").toggle();
  $(".contenido").show(1000);
});
//Funcion doble click titulo AboutUs
$("#tituloAboutUs").dblclick(function () {
  $(this).css("color", "yellow");
});
//Funcion doble click titulo Destacados
$("#tituloDestacados").dblclick(function () {
  $(this).css("color", "yellow");
});
//Funcion doble click titulo Contacto
$("#tituloContacto").dblclick(function () {
  $(this).css("color", "yellow");
});
//Funcion doble click Viajes Chile (Footer)
$("#viajesChile").dblclick(function () {
  $(this).css("color", "yellow");
});

//smooth scroll
$("a").click(function (event) {

  if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
      }, 1000); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
  }
});


// Funcion ScrollTop
 function scrollToTop() {
   window.scrollTo({
    top: 0,
    behavior: "smooth",
   });
}



// Muestra u oculta el botón según el desplazamiento de la página
window.onscroll = function () {
   var btn = document.getElementById("scrollToTopBtn");
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     btn.style.display = "block";
   } else {
     btn.style.display = "none";
   }
 };
