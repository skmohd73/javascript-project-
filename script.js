// digital clock program 

function upadteClock(){
    const now  = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString  = `${hours}:${minutes}:${second}`;

    document.getElementById("clock").textContent  = timeString;

}

setInterval(upadteClock,1000);// dynamic work in the interval of 2second