$( document ).ready(function() {
    
    const items = get_items();
    const $menu = $('#Menu');
    const $contenido = $('#Contenido');

    var MC = "", MI = "";

    for(var i = 0; i < items.length; i++){
        MC += getTitle(items[i].titulo, i);
        MI += getImages(items[i], i);
    }
    
    $menu.html(MC);
    $contenido.html(MI);
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});

function getImages(item, id){
    var R = "";
    
    R += "<div class='proyecto owl-carousel owl-theme' id='"+getId(id)+"'>";
    for(var j = 0; j < item.imagenes.length; j++){
        var imagen = item.imagenes[ j ];
        R += "<div>";
        R += "<img src='blog/imagenes/"+imagen+"' />";
        R += "</div>";
    }
    R += "</div>";
    
    return R;
}

function getId(id){
    return "proyecto-"+id;
}

function getTitle(titulo, i){
    var R = "";
    R += "<li><a href='#"+getId(i)+"'>";
    R += titulo;
    R += "</a></li>";
    return R;
}