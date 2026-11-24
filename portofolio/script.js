// SOCIAL MEDIA LINKS

document.querySelector(".fa-linkedin").parentElement.href ="https://www.linkedin.com/in/aayush-shukla-5764ab2a7?utm_source=share_via&utm_content=profile&utm_medium=member_android";

document.querySelector(".fa-github").parentElement.href =
    "https://github.com/aayushshukla21?tab=overview&from=2025-12-01&to=2025-12-31";

document.querySelector(".fa-x-twitter").parentElement.href =
    "https://x.com/Aayush_shukla21";

document.querySelector(".fa-instagram").parentElement.href =
    "https://www.instagram.com/aa21yxsh?dmpr=MXF4cGdqamJmdjB6OA==";


// OPEN LINKS IN NEW TAB

document.querySelectorAll(".social-icons a").forEach(link => {
    link.target = "_blank";
});




// LET'S CHAT - TELEGRAM

const chatButton = document.querySelector(".contact .button button");

if (chatButton) {
    chatButton.addEventListener("click", function () {
        window.open("https://t.me/Bhandarainsta", "_blank");
    });
}

// HAMBURGER MENU

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuIcon.classList.replace("fa-bars", "fa-times");
        } else {
            menuIcon.classList.replace("fa-times", "fa-bars");
        }

    });

    // CLOSE MENU WHEN A LINK IS CLICKED

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuIcon.classList.replace("fa-times", "fa-bars");
        });
    });

});
const downloadBtn = document.querySelector(".button button");

downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets\document";
    link.download = "Aayush kr. Shukla cv.pdf";
    link.click();
});