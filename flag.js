const canvas=document.getElementById('flag'),ctx=canvas.getContext('2d');
const W=canvas.width,H=canvas.height;let t=0;
function drawFlag(){ctx.clearRect(0,0,W,H);
const amp=10,freq=0.02;
for(let y=0;y<H;y++){const dx=Math.sin((y+t)*freq)*amp;
ctx.fillStyle='#0033A0';ctx.fillRect(dx,y,40,1);
ctx.fillStyle='#FFFFFF';ctx.fillRect(dx+40,y,40,1);
ctx.fillStyle='#D52B1E';ctx.fillRect(dx+80,y,40,1);}
t+=2;requestAnimationFrame(drawFlag);}
drawFlag();