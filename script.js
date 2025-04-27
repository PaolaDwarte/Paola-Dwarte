const menu = document.getElementById('menu'), menuIcon=document.getElementById('menuIcon');
const searchIcon=document.getElementById('searchIcon'), cartIcon=document.getElementById('cartIcon');
const cartPanel=document.getElementById('cart-panel'), cartItemsUl=document.getElementById('cart-items');
let cart=[]; menuIcon.addEventListener('click',e=>{e.stopPropagation();menu.style.right=menu.style.right==='0px'?'-40%':'0px';});
cartIcon.addEventListener('click',e=>{e.stopPropagation();cartPanel.style.right=cartPanel.style.right==='0px'?'-300px':'0px';});
document.addEventListener('click',e=>{if(!menu.contains(e.target)&&e.target!==menuIcon)menu.style.right='-40%';if(!cartPanel.contains(e.target)&&e.target!==cartIcon)cartPanel.style.right='-300px';});
document.querySelectorAll('.add-to-cart').forEach(btn=>btn.addEventListener('click',e=>{let prod=e.target.closest('.product').dataset.name;cart.push(prod);renderCart();}));
function renderCart(){cartItemsUl.innerHTML='';cart.forEach((item,i)=>{let li=document.createElement('li');li.textContent=item;let rm=document.createElement('span');rm.textContent='✖';rm.className='remove-item';rm.style.cursor='pointer';rm.addEventListener('click',()=>{cart.splice(i,1);renderCart();});li.appendChild(rm);cartItemsUl.appendChild(li);});}
const carousel=document.getElementById('carousel');let pos=0;
function moveCarousel(amount){pos+=amount;if(pos>=carousel.scrollWidth)pos=0;if(pos<0)pos=carousel.scrollWidth-carousel.offsetWidth;carousel.scrollTo({left:pos,behavior:'smooth'});}
setInterval(()=>moveCarousel(carousel.offsetWidth*0.33),2000);
