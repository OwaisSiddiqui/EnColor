(()=>{"use strict";const o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const t=new Uint8Array(16);function n(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}const r=[];for(let o=0;o<256;++o)r.push((o+256).toString(16).slice(1));const c=function(e,t,c){if(o.randomUUID&&!t&&!e)return o.randomUUID();const l=(e=e||{}).random||(e.rng||n)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){c=c||0;for(let o=0;o<16;++o)t[c+o]=l[o];return t}return function(o,e=0){return(r[o[e+0]]+r[o[e+1]]+r[o[e+2]]+r[o[e+3]]+"-"+r[o[e+4]]+r[o[e+5]]+"-"+r[o[e+6]]+r[o[e+7]]+"-"+r[o[e+8]]+r[o[e+9]]+"-"+r[o[e+10]]+r[o[e+11]]+r[o[e+12]]+r[o[e+13]]+r[o[e+14]]+r[o[e+15]]).toLowerCase()}(l)};new p5,console.log("Working");const l=document.querySelectorAll("*");chrome.storage.sync.get("choice",(o=>{function e(o,e,t){return o<=t&&o>=e?o:-1}"normal"!==o[0]&&l.forEach((o=>{["color","backgroundColor"].forEach((t=>{var n,r;if("backgroundColor"!==t||"p"!==o.nodeName.toLowerCase())if("IMG"===o.nodeName)!function(o,e){fetch(e).then((async e=>{let t=await e.blob(),n=new FormData;n.append(c(),t),fetch("http://127.0.0.1:5000/convert",{method:"POST",mode:"cors",body:n}).then((async e=>{let t=await e.blob();var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){var e=n.result;o.src=e}}))}))}(o,o.src);else{colorMode(HSB);const c=getComputedStyle(o),d=color(c[t]),u=hue(d),i=saturation(d),g=brightness(d);console.log(o,c.color),console.log(u,i,g);var l=u,s=i,a=g;if(-1!=e(u,19,130)&&-1!=e(i,46,203)&&-1!=e(g,60,194)){l=(n=u)+(r=-170)>255?n+r-255:n+r<0?n+r+255:n+r,s=120,a=g,console.log("blind detected"),console.log(getComputedStyle(o).color+" "+o.nodeName),console.log("New color 1",l,s,a);const e=color(l,s,a);colorMode(HSL),console.log("New color",e.toString("hsb"));const c=`hsl(${hue(e)}, ${saturation(e)}%, ${lightness(e)}%)`;o.style[t]=c}}}))}))}))})();