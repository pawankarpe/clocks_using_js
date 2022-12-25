 let clock =  () => {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
    
    if (hours == 12) {
        hours = 12; 
    }
    else if(hours >= 12){
        hours =  hours - 12;
        period = "PM";
    }
   
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds}:${period}`;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);

};

clock();