(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let r=0,a=0;const s=document.querySelector("#btnOrder"),d=document.querySelector("#btnDetener"),o=document.querySelector("#btnNew"),c=document.querySelector("#player-cards"),l=document.querySelector("#computer-cards"),i=document.querySelectorAll("small"),u=()=>{e=[];for(let n=2;n<=10;n++)for(let r of t)e.push(n+r);for(let r of t)for(let t of n)e.push(t+r);return _.shuffle(e)};u();const m=()=>{if(0===e.length)throw"No hay Cartas en el deck";return e.pop()},p=e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},b=e=>{do{const t=m();a+=p(t),i[1].innerText=a;const n=document.createElement("img");if(n.src=`assets/cartas/${t}.png`,n.classList.add("imageCard"),l.append(n),e>21)break}while(a<e&&e<=21);setTimeout(()=>{a===e?alert("Nadie Gana"):e>21?alert("Computadora Gana"):a>21?alert("Jugador Gana"):alert("Computadora Gana")},10)};s.addEventListener("click",()=>{const e=m();r+=p(e),i[0].innerText=r;const t=document.createElement("img");t.src=`assets/cartas/${e}.png`,t.classList.add("imageCard"),c.append(t),r>21?(console.warn("Lo siento, Perdiste :("),s.disabled=!0,d.disabled=!0,b(r)):21===r&&(console.warn(" Ganaste!!!"),s.disabled=!0,d.disabled=!0,b(r))}),d.addEventListener("click",()=>{s.disabled=!0,d.disabled=!0,b(r)}),o.addEventListener("click",()=>{console.clear(),e=[],e=u(),r=0,a=0,i[0].innerText=0,i[1].innerText=0,l.innerHTML=" ",c.innerHTML=" ",s.disabled=!1,d.disabled=!1})})();