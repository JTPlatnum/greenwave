$( document ).ready(function() {
    $('.carousel').carousel({
        interval: 11000
    });

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('#header-menu ul').toggleClass('active');
 
        e.preventDefault();
    });

    $('#thumbRecipeOne').on('click', function(){
        $('#hiddenRecipeOne').toggleClass('active');
    });

    $('#thumbRecipeTwo').on('click', function(){
        $('#hiddenRecipeTwo').toggleClass('active');
    });

});

