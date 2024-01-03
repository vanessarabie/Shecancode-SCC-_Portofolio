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

// for sending messages on the email


// function sendEmail(){
//     Email.send({
// Host : "smtp.gmail.com",
// Username : "vanessarabie12@gmail.com",
// Password : "#",
// To : 'vanessarabie12@gmail.com',
// From : document.getElementById("email").value,
// Subject : "Portfolio messagers",
// Body : "Name: " + document.getElementById("Name").value +
//  "<br> Email: " + document.getElementById("Email").value +
// "<br> Message: " + document.getElementById("Message").value
// }).then(
// message => alert("Message sent successfully")
// );
// }