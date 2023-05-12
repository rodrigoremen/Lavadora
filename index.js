const lavadora = {
    power:false,
    nivel_agua:0,
    nivel_lavado:0,
    tiempo_lavado:0,
    enguaje:0,
    lavar:false
}

function PrenderLedPower(){
    if(lavadora.power){
        //apaga
        document.getElementById("power").classList.remove('bg-emerald-100','text-emerald-700');
        lavadora.power = false;
    }else{
        //prende
        document.getElementById("power").classList.add('bg-gray-100','text-gray-700');
        lavadora.power = true;
    }
}