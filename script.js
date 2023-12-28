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

function sendEmail(){
    Email.send({
Host : "smtp.gmail.com",
Username : "vanessarabie12@gmail.com",
Password : "#",
To : 'vanessarabie12@gmail.com',
From : document.getElementById("email").value,
Subject : "Portfolio messagers",
Body : "Name: " + document.getElementById("Name").value +
 "<br> Email: " + document.getElementById("Email").value +
"<br> Message: " + document.getElementById("Message").value
}).then(
message => alert("Message sent successfully")
);
}