// ============================
// ELEMENTS
// ============================

const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const proposal = document.getElementById("proposal");
const ending = document.getElementById("ending");

const beginBtn = document.getElementById("beginBtn");
const nextButton = document.getElementById("nextButton");
const galleryButton = document.getElementById("galleryButton");
const proposalButton = document.getElementById("proposalButton");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const bgMusic = document.getElementById("bgMusic");

const typingText = document.getElementById("typingText");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");

// ============================
// CREATE STARS
// ============================

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(Math.random()*5+2)+"s";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

// ============================
// FLOATING HEARTS
// ============================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,400);

// ============================
// SHOW SECTION
// ============================

function showSection(current,next){

current.classList.add("hidden");

next.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ============================
// BEGIN BUTTON
// ============================

beginBtn.addEventListener("click",()=>{

bgMusic.play();

showSection(intro,hero);

gsap.from(".heroImage",{

duration:2,

scale:0,

opacity:0,

ease:"back.out(1.7)"

});

gsap.from(".glassCard",{

duration:1.5,

y:100,

opacity:0

});

});

// ============================
// HERO -> LETTER
// ============================

nextButton.addEventListener("click",()=>{

showSection(hero,letter);

startTyping();

});
