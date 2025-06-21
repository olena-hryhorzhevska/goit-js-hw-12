import{a as F,i as p,S as M}from"./assets/vendor-D8_O3--j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const P="50842900-bcdcb4b14e1b1067d3f853731",$="https://pixabay.com/api/";async function f(s,o){try{const r=await F.get($,{params:{key:P,q:s,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),n=r.data.hits,e=r.data.totalHits;return n.length<1&&p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"../img/webp/cross.png"}),{images:n,totalHits:e}}catch(r){throw p.show({message:`Error: ${r.message}`,backgroundColor:"#EF4040",messageColor:"#FAFAFB"}),r}}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),q=new M(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:v,downloads:w})=>{const S=e.split(",").slice(0,3).join(", ");return`
  <li class="cat list">
    <a href="${n}">
      <img src="${r}" alt="${S}" />
    </a>
<div class="info">
  <div class="info-row titles">
    <p><strong>Likes</strong></p>
    <p><strong>Views</strong></p>
    <p><strong>Comments</strong></p>
    <p><strong>Downloads</strong></p>
  </div>
<div class="info-row values">
    <p>${t}</p>
    <p>${i}</p>
    <p>${v}</p>
    <p>${w}</p>
  </div>
</div>
  </li>
    `}).join("");m.insertAdjacentHTML("beforeend",o),q.refresh()}function A(){m.innerHTML=""}function L(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function c(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}const B=document.querySelector(".form"),E=document.querySelector(".load-more-btn");B.addEventListener("submit",x);E.addEventListener("click",C);let a=1,d="",O=15,u=0;async function x(s){s.preventDefault(),a=1,A(),L(),d=s.currentTarget.elements["search-text"].value;try{const{images:o,totalHits:r}=await f(d,a);o.length>0?(y(o),u=Math.ceil(r/O),a<u?c():l()):l()}catch{}finally{b()}}function C(){a++,L(),f(d,a).then(({images:s})=>{y(s),c(),a<u?c():l()}).finally(()=>b())}
//# sourceMappingURL=index.js.map
