let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

let dd = document.querySelector('#dd');
let hh = document.querySelector('#hh');
let mm = document.querySelector('#mm');
let ss = document.querySelector('#ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '01/01/2025 00:00:00';

// Formato de data dd/mm/yyyy

let x = setInterval(function () {
    let agora = new Date().getTime();
    let contagem = new Date(endDate).getTime();
    let distancia = contagem - agora;

    // Cálculo de tempo para dias, horas, minutos e segundos

    let d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distancia % (1000 * 60)) / 1000);

    // Emita o resultado nos elementos com id

    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    dias.innerHTML = d + "<br><span>Dias</span>";
    horas.innerHTML = h + "<br><span>Horas</span>";
    minutos.innerHTML = m + "<br><span>Minutos</span>";
    segundos.innerHTML = s + "<br><span>Segundos</span>";

    // Animação do círculo

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Pontos do círculo animado

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

    // Se a contagem regressiva terminar, exiba algum texto

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = "none";
        document.querySelector(".novoAno").style.display = "block";
    }
});

