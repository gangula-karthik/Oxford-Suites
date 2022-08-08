// responsive navbar animations
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });

}

// collapsing extended navbar on scroll
window.addEventListener("scroll", () => {
    // amount that the user has scrollen down
    const scrolled = window.scrollY;
    const e = document.querySelector("body .reviews-and-book-now");
    console.log(scrolled);
    if (scrolled > 700){
        e.style.animation = "Slide_up 0.4s ease-out forwards";
        document.querySelector("body .book").style.animation = "Slide_up 0.5s ease-in forwards";
    } else if (scrolled <= 700){
        e.style.animation = "Slide_down 0.2s ease-out";
        e.style.visibility = "visible";
        if (checker == 0){
        document.querySelector("body .book").style.animation = "Slide_down 0.5s ease-in forwards";
        }
    }
});


// reserve button animation on click
let checker = 1; 
document.querySelector(".reviews-and-book-now ul li button").onclick = function(){
    if (checker == 1){
        document.querySelector(".reviews-and-book-now ul li button i").setAttribute("class", "fa-solid fa-angle-down fa-rotate-180");
        document.querySelector(".reviews-and-book-now ul li button i").style.transition = "all 0.2s ease-in-out";
        document.querySelector("body .book").style.animation = "Slide_down 0.5s ease-in-out forwards";
        document.querySelector("body .book").style.display = "flex";
        checker -= 1;
    } else if (checker == 0){
        document.querySelector(".reviews-and-book-now ul li button i").setAttribute("class", "fa-solid fa-angle-down");
        document.querySelector(".reviews-and-book-now ul li button i").style.transition = "all 0.2s ease-in-out";
        document.querySelector("body .book").style.animation = "Slide_up 0.5s ease-in-out forwards";
        checker += 1;
    }
};


navSlide();


// const open = document.getElementById('open');
//         const modal_container = document.querySelector('.modal-container');
//         const close = document.getElementById('close');

//         open.addEventListener('click', () => {
//             modal_container.classList.add('show');
//         } );


//         close.addEventListener('click', () => {
//             modal_container.classList.remove('show');
//         } );

var date = new Date();
var tdate = date.getDate();
var mdate = date.getMonth() + 1;
var ydate = date.getUTCFullYear();

if (mdate < 10){
    mdate = "0" + mdate;
}

if (tdate < 10){
    tdate = "0" + tdate;
}

var minDate = ydate + "-" + mdate + "-" + tdate;
document.getElementById("booking_date").setAttribute("min", minDate);



