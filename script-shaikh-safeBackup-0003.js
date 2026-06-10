// digital clock program 

function upadteClock(){
    const now  = new Date();
    const hours = now.getHours().toString.;
    const minutes = now.getMinutes();
    const second = now.getSeconds();
    const timeString  = `${hours}:${minutes}:${second}`;

    document.getElementById("clock").textContent  = timeString;

}
upadteClock();