$(document).ready(function() {

    $("#mobile-menu-button").click(function() {
        $("#mobile-menu").toggleClass("hidden");
    });

    $("#perfumeLeft").click(function() {
        $("#modalLeft").toggleClass("hidden");
    });

    $("#perfumeRight").click(function() {
        $("#modalRight").toggleClass("hidden");
    });

    $("#perfumeCenter").click(function() {
        $("#modalCenter").toggleClass("hidden");
    });

    $(".modal-overlay").click(function() {
        $(".Modal").addClass("hidden");
    })

    $("#aboutUsMoreClick").click(function() {
        $("#aboutUsMore").toggleClass("hidden")
    })


});