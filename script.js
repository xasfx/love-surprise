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
// ============================
// TYPEWRITER LETTER
// ============================

const message = `Dear My Love,

Sometimes I wonder how someone as amazing as you came into my life.

You make ordinary days feel extraordinary.

Your smile brightens my darkest moments.

Your laughter is my favorite sound.

Thank you for loving me,
supporting me,
and making life so beautiful.

No matter what happens,
I promise to stand beside you,
make you smile,
and love you with all my heart.

You are my favorite chapter.

❤️
`;

function startTyping(){

typingText.innerHTML="";

new Typed("#typingText",{

strings:[message],

typeSpeed:38,

backSpeed:0,

showCursor:true,

cursorChar:"|",

startDelay:500

});

}

// ============================
// LETTER -> GALLERY
// ============================

galleryButton.addEventListener("click",()=>{

showSection(letter,gallery);

gsap.from(".photo",{

opacity:0,

scale:.8,

y:80,

stagger:.2,

duration:1

});

});

// ============================
// GALLERY -> PROPOSAL
// ============================

proposalButton.addEventListener("click",()=>{

showSection(gallery,proposal);

gsap.from(".proposalBox",{

opacity:0,

scale:.8,

duration:1.5,

ease:"back.out(1.7)"

});

});

// ============================
// MOVING NO BUTTON
// ============================

const proposalBox=document.querySelector(".proposalBox");

noBtn.addEventListener("mouseover",()=>{

const maxX=proposalBox.clientWidth-150;

const maxY=proposalBox.clientHeight-100;

const x=Math.random()*maxX;

const y=Math.random()*maxY;

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

// Mobile support

noBtn.addEventListener("click",(e)=>{

e.preventDefault();

const maxX=proposalBox.clientWidth-150;

const maxY=proposalBox.clientHeight-100;

noBtn.style.left=Math.random()*maxX+"px";

noBtn.style.top=Math.random()*maxY+"px";

});

// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click",()=>{

// Big Confetti

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

// Left Fireworks

const duration=3000;

const animationEnd=Date.now()+duration;

const defaults={

startVelocity:30,

spread:360,

ticks:60,

zIndex:9999

};

const interval=setInterval(()=>{

const timeLeft=animationEnd-Date.now();

if(timeLeft<=0){

clearInterval(interval);

showEnding();

return;

}

const particleCount=50*(timeLeft/duration);

confetti(Object.assign({},defaults,{

particleCount,

origin:{

x:Math.random()*0.3,

y:Math.random()*0.5

}

}));

confetti(Object.assign({},defaults,{

particleCount,

origin:{

x:.7+Math.random()*0.3,

y:Math.random()*0.5

}

}));

},250);

});
