const lavadora = {
    power: true,
    nivel_agua: 0,
    nivel_lavado: 1,
    tiempo_lavado: 0,
    enguaje: 1,
    lavar: false
}

function PrenderLedPower() {
    if (lavadora.power == false) {
        //encendido
        document.getElementById("power").classList.remove('bg-gray-100', 'text-gray-700');
        lavadora.power = true;
        document.getElementById("power").classList.add('bg-emerald-100', 'text-emerald-700');
        const nivel_agua = document.getElementById("NA");
        document.getElementById("NA").classList.remove('bg-gray-300')
        document.getElementById("NA").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        nivel_agua.disabled = false;
        const nivel_lavado = document.getElementById("NL");
        document.getElementById("NL").classList.remove('bg-gray-300')
        document.getElementById("NL").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        nivel_lavado.disabled = false;
        const tiempo_lavado = document.getElementById("TL");
        document.getElementById("TL").classList.remove('bg-gray-300')
        document.getElementById("TL").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        tiempo_lavado.disabled = false;
        const enguaje = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('bg-gray-300')
        document.getElementById("EJ").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        enguaje.disabled = false;
        const lavar = document.getElementById("lv");
        document.getElementById("lv").classList.remove('bg-gray-300')
        document.getElementById("lv").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        lavar.disabled = false;
    } else {
        //apagado
        document.getElementById("power").classList.remove('bg-emerald-100', 'text-emerald-700');
        lavadora.power = false;
        document.getElementById("power").classList.add('bg-gray-100', 'text-gray-700');
        const nivel_agua = document.getElementById("NA");
        document.getElementById("NA").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NA").classList.add('bg-gray-300')
        nivel_agua.disabled = true;
        const nivel_lavado = document.getElementById("NL");
        document.getElementById("NL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NL").classList.add('bg-gray-300')
        nivel_lavado.disabled = true;
        const tiempo_lavado = document.getElementById("TL");
        document.getElementById("TL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("TL").classList.add('bg-gray-300')
        tiempo_lavado.disabled = true;
        const enguaje = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("EJ").classList.add('bg-gray-300')
        enguaje.disabled = true;
        const lavar = document.getElementById("lv");
        document.getElementById("lv").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("lv").classList.add('bg-gray-300')
        lavar.disabled = true;
    }
    if (lavadora.lavar == true) {
        lavadora.lavar = false;
        document.getElementById("bl").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
    lavadora.nivel_agua = 0;
    lavadora.nivel_lavado = 1;
    lavadora.tiempo_lavado = 0
    lavadora.enjuague = 1;
}
function nivelAgua() {
    lavadora.nivel_agua = lavadora.nivel_agua + 1;
    if (lavadora.nivel_agua == 1) {
        document.getElementById("bag2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
        document.getElementById("bag1").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
    } if (lavadora.nivel_agua == 2) {
        document.getElementById("bag2").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("bag1").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_agua == 3) {
        document.getElementById("bag3").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("bag2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_agua == 4) {
        document.getElementById("bag4").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("bag3").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_agua == 5) {
        document.getElementById("bag5").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("bag4").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_agua > 5) {
        lavadora.nivel_agua = 0
        document.getElementById("bag5").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
}
function nivelLavado() {
    lavadora.nivel_lavado = lavadora.nivel_lavado + 1;
    if (lavadora.nivel_lavado == 1) {
        document.getElementById("nl1").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
    } if (lavadora.nivel_lavado == 2) {
        document.getElementById("nl2").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("nl1").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_lavado == 3) {
        document.getElementById("nl3").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("nl2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.nivel_lavado > 3) {
        lavadora.nivel_lavado = 0
        document.getElementById("nl3").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
}
function tiempoLavado() {
    lavadora.tiempo_lavado = lavadora.tiempo_lavado + 1;
    if (lavadora.tiempo_lavado == 1) {
        document.getElementById("tl2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
        document.getElementById("tl1").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
    } if (lavadora.tiempo_lavado == 2) {
        document.getElementById("tl2").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("tl1").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.tiempo_lavado == 3) {
        document.getElementById("tl3").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("tl2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.tiempo_lavado == 4) {
        document.getElementById("tl4").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("tl3").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.tiempo_lavado == 5) {
        document.getElementById("tl5").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("tl4").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.tiempo_lavado > 5) {
        lavadora.tiempo_lavado = 0
        document.getElementById("tl5").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
}
function enjuage() {
    lavadora.enguaje = lavadora.enguaje + 1;
    if (lavadora.enguaje == 1) {
        document.getElementById("enj1").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
    } if (lavadora.enguaje == 2) {
        document.getElementById("enj2").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("enj1").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.enguaje == 3) {
        document.getElementById("enj3").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        document.getElementById("enj2").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    } if (lavadora.enguaje > 3) {
        lavadora.enguaje = 0
        document.getElementById("enj3").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
}
function lavar() {
    if (lavadora.lavar == false) {
        lavadora.lavar = true
        console.log("El boton esta true");
        document.getElementById("bl").className = "inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700";
        const nivel_agua = document.getElementById("NA");
        document.getElementById("NA").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NA").classList.add('bg-gray-300')
        nivel_agua.disabled = true;
        const nivel_lavado = document.getElementById("NL");
        document.getElementById("NL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NL").classList.add('bg-gray-300')
        nivel_lavado.disabled = true;
        const tiempo_lavado = document.getElementById("TL");
        document.getElementById("TL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("TL").classList.add('bg-gray-300')
        tiempo_lavado.disabled = true;
        const enguaje = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("EJ").classList.add('bg-gray-300')
        enguaje.disabled = true;
        const lavar = document.getElementById("lv");
        document.getElementById("lv").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("lv").classList.add('bg-gray-300')
        lavar.disabled = true;
    }
}