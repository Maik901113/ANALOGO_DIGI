const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(() =>{

    let tiempo = new Date();
    let hr= tiempo.getHours()*30;
    let min= tiempo.getMinutes()*deg;
    let seg= tiempo.getSeconds()* deg;

    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg)`;

})
function relojDig(){

    const tiempo2 = new Date();


    const horadig = tiempo2.getHours().toString().padStart(2, '0');
    const minutodig = tiempo2.getMinutes().toString().padStart(3, ':', '0');
    const segundodig = tiempo2.getSeconds().toString().padStart(3, ':', '0');
    
    
    if (horadig > 12) {
        document.getElementById('hora' ).textContent = horadig - 12;
        document.getElementById('m').textContent = "PM";
    }
    else {
        document.getElementById('hora').textContent = horadig;
        document.getElementById('m').textContent = "AM";
    }

    document.getElementById('minuto').textContent = minutodig;
    document.getElementById('segundo').textContent = segundodig;
  
    


}

setInterval(relojDig,1000); 