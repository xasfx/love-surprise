const s=showBtn,q=question,y=yes,n=no,r=result;
s.onclick=()=>{q.classList.remove('hidden');s.style.display='none';}
y.onclick=()=>{q.classList.add('hidden');r.classList.remove('hidden');confetti({particleCount:250,spread:180});}
n.onmouseover=()=>{n.style.transform=`translate(${Math.random()*250-125}px,${Math.random()*150-75}px)`;}
