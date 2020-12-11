$(document).ready(function() {

function scrollToTop() {
    let mybutton = document.getElementById("toTop");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

window.addEventListener('scroll', function(e) {
    scrollToTop()
});

function topPage() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

$('#toTop').click(function(){
    topPage();    

});


    function openSearchBar() {
        let searchBar = document.getElementById("searchArea");
        if (searchBar) {
            searchBar.style.width = "100%";
        }
    }

    $('#openSearch').click(function(){
        openSearchBar();
        });



    function closeSearchBar() {
        document.getElementById("searchArea").style.width = "0%";
    }

    $('#closeSearch').click(function(){
        closeSearchBar();
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



let intelDiv = document.getElementById("intel");
let pwcDiv = document.getElementById("pwc");
let maintDiv = document.getElementById("maint");
let howToDiv = document.getElementById("howTo");

function showIntel() {
    howToDiv.style.display = "none";
    pwcDiv.classList.add("hide-work");
    maintDiv.classList.add("hide-work");
    intelDiv.classList.toggle("hide-work");
}

function showPWC() {
    howToDiv.style.display = "none";
    intelDiv.classList.add("hide-work");
    maintDiv.classList.add("hide-work");
    pwcDiv.classList.toggle("hide-work");
}

function showColm() {
    howToDiv.style.display = "none";
    pwcDiv.classList.add("hide-work");
    intelDiv.classList.add("hide-work");
    maintDiv.classList.toggle("hide-work");
}

function sendEmail() {
    document.getElementById("sendAnEmailForm").reset();
    setTimeout(function(){ alert("Thank you for sending that mail, don't worry, it's not real! :)"); }, 1000);
}
