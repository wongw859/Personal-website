// Make nav bar white when scrolling down
$(function() {
    $(document).scroll(function() {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// end of  nav bar white when scrolling down
// ////////////////////////////
// Show more photos
const seeMoreBtn = document.getElementById("seeMoreBtn");
const photo5 = document.getElementById("photo5");
const photo6 = document.getElementById("photo6");

seeMoreBtn.addEventListener('click', function() {
    if (photo5.style.display === "none") {
        seeMoreBtn.innerText = "Hide";
        photo5.style.display = "block";
    } else {
        seeMoreBtn.innerText = "Show more";
        photo5.style.display = "none";
    }

    if (photo6.style.display === "none") {
        seeMoreBtn.innerText = "Hide";
        photo6.style.display = "block";
    } else {
        seeMoreBtn.innerText = "Show more";
        photo6.style.display = "none";
    }

})