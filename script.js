// for active links

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// for the menu bar


document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementById('icon');
    var navList = document.querySelector('nav ul');
    var navLinks = document.querySelectorAll('nav ul li a');

    icon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Close the menu when a navigation item is clicked
            navList.classList.remove('show');
        });
    });
});

// on scroll effect


window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.getElementById("header1").style.backgroundColor = "transparent";
        let links = document.getElementsByClassName("nav-a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "";
        }
    } else {
        document.getElementById("header1").style.backgroundColor = "#484444";
        let links = document.getElementsByClassName("nav-a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#ff004f";
        }
    }
};
