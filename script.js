let currentSlide = 0;

const slides =
document.querySelectorAll(".slide");


/* NEXT SLIDE */

function nextSlide(){

    if(currentSlide < slides.length - 1){

        slides[currentSlide]
        .classList.remove("active");

        currentSlide++;

        slides[currentSlide]
        .classList.add("active");

        heart();

    }
}


/* SINGLE HEART CLICK EFFECT */

function heart(){

    const h =
    document.createElement("div");

    h.className =
    "click-heart";

    h.innerHTML = "♥";

    document.body.appendChild(h);

    requestAnimationFrame(()=>{

        h.style.opacity = "0";

        h.style.transform =
        "translate(-50%,-130px) scale(1.15)";

    });

    setTimeout(()=>{

        h.remove();

    },1100);
}


/* DATE REVEAL */

let dateStep = 0;

function revealDate(){

    const secret =
    document.getElementById("secret");

    const clues = [
        "25",
        "03",
        "2026"
    ];

    if(dateStep < clues.length){

        secret.innerText =
        clues[dateStep];

        dateStep++;

        heart();

    }

    else{

        secret.innerText =
        "25 • 03 • 2026";

        heart();

        setTimeout(()=>{

            nextSlide();

        },900);

    }
}


/* NAME REVEAL */

function revealName(){

    const name =
    document.getElementById("name");

    let count = 0;

    const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const timer =
    setInterval(()=>{

        let randomText = "";

        for(
            let i=0;
            i<Math.min(count,7);
            i++
        ){

            randomText +=
            letters[
                Math.floor(
                    Math.random()*letters.length
                )
            ];

        }

        name.innerText =
        randomText || "???";

        count++;

        if(count > 12){

            clearInterval(timer);

            name.innerText =
            "MOUNIKA";

            heart();

            setTimeout(()=>{

                nextSlide();

            },1000);

        }

    },100);
}


/* FLOATING BACKGROUND */

function createFloating(){

    const item =
    document.createElement("span");

    const symbols = [
        "•",
        "·",
        "✦"
    ];

    item.innerText =
    symbols[
        Math.floor(
            Math.random()*symbols.length
        )
    ];

    item.style.left =
    Math.random()*100 + "vw";

    item.style.fontSize =
    (10 + Math.random()*14) + "px";

    item.style.animationDuration =
    (7 + Math.random()*5) + "s";

    document
    .querySelector(".background")
    .appendChild(item);

    setTimeout(()=>{

        item.remove();

    },12000);
}

setInterval(
    createFloating,
    800
);
