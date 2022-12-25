let demo = document.getElementById("demo");
let deadline = new Date("Jan, 2024 24:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let time = deadline - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);


    console.log(days + "days" + hours + "hours" + minutes + "minutes" + seconds + "seconds");
    demo.innerHTML = days + " days : " + hours + "  hours : " + minutes + " minutes : " + seconds + " seconds "
}, 1000)

