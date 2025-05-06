$(document).ready(function() {
    // Inicializar Flickity para sliders
    $('.slider').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 6000,
        pauseAutoPlayOnHover: true,
        fade: true,
        imagesLoaded: true
    });

    $('.services-slider').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 4000,
        imagesLoaded: true
    });

    // Inicializar Magnific Popup para lightbox
    $('.lightbox').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 300
    });

    // Inicializar AOS para animaciones
    AOS.init({
        duration: 800,
        once: true
    });

    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });

    // Validación básica del formulario (simulación)
    $('#contact-form, #download-form-submit').on('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado (esto es una simulación, configura el backend para procesar los datos).');
    });
});