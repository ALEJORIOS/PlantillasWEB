function seeInicio() {
    disableAll();
    document.getElementById('startC').style.display = "block";
    showNav();
    focus();
}

function seeServicios() {
    disableAll();
    document.getElementById('services').style.display = "block";
    showNav();
    focus();
}

function seeEstrategias() {
    disableAll();
    document.getElementById('strategies').style.display = "block";
    showNav();
    focus();
}

function seeClientes() {
    disableAll();
    document.getElementById('costumers').style.display = "block";
    showNav();
    focus();
}

function seeContactenos() {
    disableAll();
    document.getElementById('contactus').style.display = "block";
    showNav();
    focus();
}

function disableAll() {
    document.getElementById('startC').style.display = "none";
    document.getElementById('services').style.display = "none";
    document.getElementById('strategies').style.display = "none";
    document.getElementById('costumers').style.display = "none";
    document.getElementById('contactus').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(event) {
    seeInicio();
    showNav();

    // Loader
    setTimeout(function() {
        var body = document.getElementsByTagName("BODY")[0];
        body.style.visibility = 'visible';
        document.getElementById('loader').style.display = 'none';
    }, 500);
});

function showNav() {
    document.getElementById('navigation').classList.toggle('show');
    document.body.classList.toggle('scrolls');
}

function focus() {
    const element = document.querySelector("#content");
    element.scrollIntoView();
}