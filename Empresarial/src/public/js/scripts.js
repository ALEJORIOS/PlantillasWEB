seeInicio();

function seeInicio() {
    disableAll();
    document.getElementById('startC').style.display = "block";
}

function seeServicios() {
    disableAll();
    document.getElementById('services').style.display = "block";
}

function seeEstrategias() {
    disableAll();
    document.getElementById('strategies').style.display = "block";
}

function seeClientes() {
    disableAll();
    document.getElementById('costumers').style.display = "block";
}

function seeContactenos() {
    disableAll();
    document.getElementById('contactus').style.display = "block";
}

function disableAll() {
    document.getElementById('startC').style.display = "none";
    document.getElementById('services').style.display = "none";
    document.getElementById('strategies').style.display = "none";
    document.getElementById('costumers').style.display = "none";
    document.getElementById('contactus').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
        var body = document.getElementsByTagName("BODY")[0];
        body.style.visibility = 'visible';
        document.getElementById('loader').style.display = 'none';


    }, 500);
});