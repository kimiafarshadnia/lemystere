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

    // var openmodal = document.querySelectorAll('.modal-open')
    // for (var i = 0; i < openmodal.length; i++) {
    //     openmodal[i].addEventListener('click', function(event) {
    //         event.preventDefault()
    //         toggleModal()
    //     })
    // }

    // const overlay = document.querySelector('.modal-overlay')
    // overlay.addEventListener('click', toggleModal)


    // function toggleModal() {
    //     const modal = document.querySelector('.modal')
    //     modal.classList.toggle('opacity-0')
    //     modal.classList.toggle('pointer-events-none')
    // }

    // modal center

    // Get the modal



});