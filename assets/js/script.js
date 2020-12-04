$(document).ready(function() {

function scrollToTop() {
    let mybutton = document.getElementById("toTop");

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

window.addEventListener('scroll', function(e) {
    scrollToTop()
});

});

let firstYHead = document.getElementById("nav-first-tab");
let seecondYHead = document.getElementById("nav-second-tab");
let thirdYHead = document.getElementById("nav-third-tab");
let fourthYHead = document.getElementById("nav-fourth-tab");


let firstYTab = document.getElementById("nav-first");
let secondYTab = document.getElementById("nav-second");
let thirdYTab = document.getElementById("nav-third");
let fourthYTab = document.getElementById("nav-fourth");

let allElements = [
    firstYHead, seecondYHead, 
    thirdYHead, fourthYHead, 
    firstYTab, secondYTab, 
    thirdYTab, fourthYTab
]

function fourthYear() {

    allElements.forEach(function(el) {
        el.classList.remove("active", "show")
    })

    fourthYHead.classList.add("active");

    fourthYTab.classList.add("active", "show");
}

function thirdYear() {

    allElements.forEach(function(el) {
        el.classList.remove("active", "show")
    })

    thirdYHead.classList.add("active");

    thirdYTab.classList.add("active", "show");
}

function secondYear() {

    allElements.forEach(function(el) {
        el.classList.remove("active", "show")
    })

    seecondYHead.classList.add("active");

    secondYTab.classList.add("active", "show");
}


function firstYear() {

    allElements.forEach(function(el) {
        el.classList.remove("active", "show")
    })

    firstYHead.classList.add("active");

    firstYTab.classList.add("active", "show");
}
