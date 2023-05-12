const lavadora = {
    power:false,
    nivel_agua:0,
    nivel_lavado:0,
    tiempo_lavado:0,
    enguaje:0,
    lavar:false
}

function PrenderLedPower(){
    if(lavadora.power == false){
        //encendido
        document.getElementById("power").classList.remove('bg-gray-100','text-gray-700');
        lavadora.power = true;
        document.getElementById("power").classList.add('bg-emerald-100','text-emerald-700');
        const nivel_agua = document.getElementById("NA");
        document.getElementById("NA").classList.remove('bg-gray-300')
        document.getElementById("NA").classList.add('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        nivel_agua.disabled = false ;
        const nivel_lavado = document.getElementById("NL");
        document.getElementById("NL").classList.remove('bg-gray-300')
        document.getElementById("NL").classList.add('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        nivel_lavado.disabled = false ;
        const tiempo_lavado = document.getElementById("TL");
        document.getElementById("TL").classList.remove('bg-gray-300')
        document.getElementById("TL").classList.add('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        tiempo_lavado.disabled = false ;
        const enguaje = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('bg-gray-300')
        document.getElementById("EJ").classList.add('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        enguaje.disabled = false ;
        const lavar = document.getElementById("lavar");
        document.getElementById("lavar").classList.remove('bg-gray-300')
        document.getElementById("lavar").classList.add('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        lavar.disabled = false ;
    }else{
        //apagado
        document.getElementById("power").classList.remove('bg-emerald-100','text-emerald-700');
        lavadora.power = false;
        document.getElementById("power").classList.add('bg-gray-100','text-gray-700');
        const nivel_agua = document.getElementById("NA");
        document.getElementById("NA").classList.remove('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        document.getElementById("NA").classList.add('bg-gray-300')
        nivel_agua.disabled = true ;
        const nivel_lavado = document.getElementById("NL");
        document.getElementById("NL").classList.remove('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        document.getElementById("NL").classList.add('bg-gray-300')
        nivel_lavado.disabled = true ;
        const tiempo_lavado = document.getElementById("TL");
        document.getElementById("TL").classList.remove('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        document.getElementById("TL").classList.add('bg-gray-300')
        tiempo_lavado.disabled = true ;
        const enguaje = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        document.getElementById("EJ").classList.add('bg-gray-300')
        enguaje.disabled = true ;
        const lavar = document.getElementById("lavar");
        document.getElementById("lavar").classList.remove('transition', 'hover:scale-110','hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500','bg-red-300','active:bg-red-500')
        document.getElementById("lavar").classList.add('bg-gray-300')
        lavar.disabled = true ;
    }
}