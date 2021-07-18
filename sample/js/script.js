let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, parallax_6, parallax_7;

window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];

    parallax_0 = document.getElementById("parallax_0");
    parallax_1 = document.getElementById("parallax_1");
    parallax_2 = document.getElementById("parallax_2");
    parallax_3 = document.getElementById("parallax_3"); 
    parallax_4 = document.getElementById("parallax_4");
    parallax_5 = document.getElementById("parallax_5");
    parallax_6 = document.getElementById("parallax_6");  

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    scrollTop = document.documentElement.scrollTop;

    let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
    progressBar.style.width = per + "%";

    parallax_0.style.transform = "translate3d(0px ," + scrollTop * .03 + "px , 0px)";
    parallax_1.style.transform = "translate3d(0px ," + -scrollTop * .03 + "px , 0px)";
    parallax_2.style.transform = "translate3d(0px ," + -scrollTop * .12 + "px , 0px)";
    parallax_3.style.transform = "translate3d(0px ," + -scrollTop * .16 + "px , 0px)"; 
    parallax_4.style.transform = "translate3d(0px ," + -scrollTop * .22 + "px , 0px)";
    parallax_5.style.transform = "translate3d(0px ," + -scrollTop * .25 + "px , 0px)";

}

function stageResize() {
    _documentHum = document.body.offsetHeight;
    _windowHNum = window.outerHeight;
}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    parallax_4.style.transform = "translate3d(" + mx / 140 +"px ," + -scrollTop * .22 + "px, 0px)";
    parallax_5.style.transform = "scale(1.1) translate(" + mx / 50 + "px ," + -scrollTop * .25 + "px)";
    parallax_6.style.transform = "scale(1.2) translate(" + -mx / 20 + "px ," + -my/20 + "px)";

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);

}
