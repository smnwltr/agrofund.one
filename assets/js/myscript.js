
// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Add white background to navbar upon scroll

$(document).ready(function () {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    var links = $(".nav-item");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll")
        }
    });
});

// smooth scrolling
$(document).ready(function () {
    $(".smooth-scroll").click(function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });
});

// Hamburger menu toggling
window.onload = function () {
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    var elementsArray = document.querySelectorAll(".nav-link");
    var collapsible = document.getElementById("navbarNav")
    // On click toggle class "is-active"
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
    });

    elementsArray.forEach(function (elem) {
        elem.addEventListener("click", function () {
            hamburger.classList.remove("is-active");
            collapsible.classList.remove("show");
        });
    });
}

// read the url to check for contact=sent parameter (contact form)
$(document).ready(
    function () {
        let searchParams = new URLSearchParams(window.location.search);
        let param = searchParams.get('contact');
        if (param == 'sent') {
            $('#contactForm').addClass('d-none');
            $('#contactSuccess').removeClass('d-none');
            $('#contactSuccess').addClass('d-block');
            $('#contactSuccess').get(0).scrollIntoView();
        }
    }
)
