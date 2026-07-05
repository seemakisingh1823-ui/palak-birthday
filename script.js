/* ============================
   PALAK BIRTHDAY WEBSITE
   PART 3A
============================ */

const gift = document.getElementById("gift");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const music = document.getElementById("music");
const fireworks = document.getElementById("fireworks");
const hearts = document.querySelector(".hearts");
const message = document.getElementById("message");

/* ---------------------------
OPEN GIFT
---------------------------- */

gift.addEventListener("click", () => {

    gift.classList.add("open");

    setTimeout(() => {

        opening.style.display = "none";

        main.style.display = "block";

        music.play();

        launchFireworks();

        createConfetti();

        createHearts();

        createBalloons();

        startSlideshow();

        typeWriter();

    },1500);

});


/* ---------------------------
TYPEWRITER EFFECT
---------------------------- */

const fullText = message.innerHTML;

message.innerHTML="";

let i=0;

function typeWriter(){

    if(i<fullText.length){

        message.innerHTML+=fullText.charAt(i);

        i++;

        setTimeout(typeWriter,25);

    }

}


/* ---------------------------
PHOTO SLIDESHOW
---------------------------- */

const photos=document.querySelectorAll(".gallery img");

let current=0;

function startSlideshow(){

photos.forEach(img=>{

img.style.opacity=".35";

});

photos[current].style.opacity="1";

setInterval(()=>{

photos[current].style.opacity=".35";

current++;

if(current>=photos.length){

current=0;

}

photos[current].style.opacity="1";

},2500);

}


/* ---------------------------
FLOATING HEARTS
---------------------------- */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},350);

}


/* ---------------------------
BALLOONS
---------------------------- */

function createBalloons(){

const emojis=["🎈","🎈","🎈","💖","✨"];

setInterval(()=>{

const b=document.createElement("div");

b.className="balloon";

b.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(8+Math.random()*6)+"s";

document.body.appendChild(b);

setTimeout(()=>{

b.remove();

},15000);

},900);

}


/* ---------------------------
CONFETTI
---------------------------- */

function createConfetti(){

const colors=[

"#ff1493",

"#ff69b4",

"#ffffff",

"#ffd700",

"#00ffff",

"#ff00ff"

];

for(let i=0;i<180;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

}
/* ===========================
   FIREWORKS
=========================== */

function launchFireworks() {

    createFirework();

    setInterval(() => {
        createFirework();
    }, 1800);

}

function createFirework() {

    const colors = [
        "#ff1493",
        "#ff69b4",
        "#ffd700",
        "#00ffff",
        "#ffffff",
        "#ff00ff",
        "#7b68ee"
    ];

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("div");

        particle.className = "firework";

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / 40;
        const distance = 80 + Math.random() * 100;

        particle.animate([
            {
                transform: "translate(0,0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px,
                ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        fireworks.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1200);

    }

}

/* ===========================
CURSOR GLOW
=========================== */

document.addEventListener("mousemove", e => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

    glow.style.width = "12px";
    glow.style.height = "12px";

    glow.style.borderRadius = "50%";

    glow.style.background = "hotpink";

    glow.style.boxShadow =
        "0 0 20px hotpink,0 0 40px deeppink";

    glow.style.pointerEvents = "none";

    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    glow.animate([
        {
            transform: "scale(1)",
            opacity: 1
        },
        {
            transform: "scale(3)",
            opacity: 0
        }
    ], {
        duration: 700
    });

    setTimeout(() => {
        glow.remove();
    }, 700);

});

/* ===========================
EXTRA HEART BURST
=========================== */

function heartBurst() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;

        heart.animate([
            {
                transform: "translate(0,0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px,
                ${Math.sin(angle) * distance}px)
                scale(.2)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);

    }

}

/* ===========================
SURPRISE END MESSAGE
=========================== */

setTimeout(() => {

    const end = document.createElement("div");

    end.className = "final-message";

    end.innerHTML = `
    ❤️<br><br>

    Once Again...<br>

    Happy Birthday<br>

    <span style="font-size:70px;">
    PALAK 🎂
    </span>

    <br><br>

    Stay Happy ❤️<br>
    Stay Blessed 🌻<br><br>

    <span style="font-size:28px;">
    Made with ❤️ by Sahil
    </span>
    `;

    document.body.appendChild(end);

    heartBurst();

}, 30000);

/* ===========================
PAGE LOADED
=========================== */

window.onload = () => {

    console.log("Happy Birthday Palak ❤️");

};
